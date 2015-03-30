var requirejs = require('requirejs');
requirejs.config({
	nodeRequire : require
});
requirejs([
	'./var/cp',
	'./var/am',
	'./var/noop',
	'./var/slice',
	'./var/compile',
	'./patterns'
],
function(
	cp,
	am,
	noop,
	slice,
	compile,
	patterns
) {'use strict';

function Pattern (p, k, f, b) {
	if (!(this instanceof Pattern)) return new Pattern(p, k, f, b);
	var r = am(p) === 'regexp';
	b = +b;
	cp(this, {
		ignoreCase : r && b !== b ? p.ignoreCase : !!b,
		source     : r ? p.source : p,
		keys       : am(k) === 'string' ? k.split(/[\s,;|]+/) : k && slice.call(k),
		parser     : f || noop
	});
}

cp(Pattern.prototype, {
is : function (s) {
	return compile(this, 2).test(s);
}
});

var undef = undefined + '';
var shell = typeof window !== undef ? window : typeof global !== undef ? global : this || 1;
shell.Pattern = shell.Pattern || Pattern;
return Pattern;
});