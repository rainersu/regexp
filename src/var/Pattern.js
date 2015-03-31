define([
	'./cp',
	'./am',
	'./noop',
	'./hasOP',
	'./slice',
	'./patterns'
],
function(
	cp,
	am,
	noop,
	hasOP,
	slice,
	patterns
) {'use strict';

function Pattern (p, k, f, b) {
	var n;
	if (!(this instanceof Pattern)) return new Pattern(p, k, f, b);	
	if (p && hasOP.call(patterns, n = p.toLowerCase())) return patterns[n];
	if (am(p) === 'regexp') {
		if (isNaN(b)) b = p.ignoreCase;
		p = p.source;
	}
	cp(this, {
		ignoreCase : b,
		source     : p,
		keys       : am(k) === 'string' ? k.split(/[\s,;|]+/) : k && slice.call(k),
		parser     : f || noop
	});
}

return Pattern;

});