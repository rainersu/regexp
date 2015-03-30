define([
	'./expressions'
],
function(
	expressions
) {'use strict';

function compile (p, y, g) {
	y = y | 0;
	g = g ? 'g' : '';
	if (p.ignoreCase) g+= 'i';
	p = p.source;
	p = (y > 1 ? '^(?:' + p + ')$' : y > 0 ? '(?:^|\\b)(?:' + p + ')(?:$|\\b)' : p);
	y = '/'  + p +  '/' + g;
	return expressions[y] || (expressions[y] = new RegExp(p, g));
}

return compile;

});