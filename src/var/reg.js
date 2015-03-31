define([
	'./am',
	'./patterns',
	'./Pattern'
],
function(
	am,
	patterns,
	Pattern
) {'use strict';

function reg (o) {
	if (am(o) !== 'array') o = [ o ];
	var l = o.length,
		i;
	while(l--) {
		i = o[l];
		patterns[i.name.toLowerCase()] = new Pattern(i.source, i.keys, i.parser, i.ignoreCase);
	}
}

return reg;

});