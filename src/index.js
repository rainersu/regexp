var requirejs = require('requirejs');
requirejs.config({
	nodeRequire : require
});
requirejs([
	'./var/undefined',
	'./var/cp',
	'./var/am',
	'./var/hasOP',
	'./var/object',
	'./var/compile',
	'./var/reg',
	'./var/expressions',
	'./var/patterns',
	'./var/Pattern',
	'./patterns'
],
function(
	undefined,
	cp,
	am,
	hasOP,
	object,
	compile,
	reg,
	expressions,
	patterns,
	Pattern,
	plugins
) {'use strict';

cp(Pattern, {
patterns : patterns,
reg      : reg,
cache    : true,
clear    : function () {
	for(var n in expressions) if (hasOP.call(expressions, n)) delete expressions[n]; 
}
});

function tj () {
	return '' + compile(this);
}

cp(Pattern.prototype, {
toJSON       : tj,
toString     : tj,
toRegExp     : function (y, g) {
	return compile(this, y, g);
},
is           : function (s) {
	return compile(this, 2).test(s);
},
in           : function (s, b) {
	return compile(this, b).test(s);
},
index        : function (s, b) {
	return s.search(compile(this, b));
},
match        : function (s, b) {
	b =+b;
	return s.match(compile(this, b === b ? b : 1, 'g')) || [];
},
parse        : function (s, b) {
	b =+b;
	var r = [],
		k = this.keys,
		e = compile(this, b === b ? b : 1, 'g'),
		l,
		a,
		o,
		v,
		j;
	while ((a = e.exec(s)) !== null) {
		o = object(a.shift());
		for (l = k.length; l--;) {
			j = k[l];
			v = a[l];
			if (o[j] === undefined && v !== undefined) o[j] = v;
		}
		v = this.parser(o);
		r.push(v !== undefined ? v : o);
	}
	return r;
},
replace      : function (s, f, b, g) {
	b =+b;
	return s.replace(compile(this, b === b ? b : 1, g || 'g'), f);
}
});

var pat = new Pattern('number');

console.log([ 'Infinity', '-1.233.3', '-123.3e-2', 'a-123.3e-2b', 'a-123.3%b' ].map(function (str) {
    return pat.match(str)[0];
}));

// [ 'Infinity', '-1.233', '-123.3e-2', '-123', '-123.3%' ]

console.log([ 'Infinity', '-1.233.3', '-123.3e-2', 'a-123.3e-2b', 'a-123.3%b' ].map(function (str) {
    return pat.parse(str, false)[0];
}));

// [ Infinity, -1.233, -1.233, -1.233, -1.233 ]


var undef = undefined + '';
var shell = typeof window !== undef ? window : typeof global !== undef ? global : this || 1;
shell.Pattern = shell.Pattern || Pattern;
return Pattern;
});