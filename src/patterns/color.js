define([
	'../var/reg'
],
function(
	reg
) {'use strict';

reg({
name   : 'color',
source : 
'#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])(?:([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9]))?' +
'|hsla?\\(\\s*(\\d+(?:\\.\\d+)?)\\s*,\\s*(\\d+(?:\\.\\d+)?)\\%\\s*,\\s*(\\d+(?:\\.\\d+)?)\\%\\s*(?:,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)' +     '|rgba?\\(\\s*(\\d+(?:\\.\\d+)?)(\\%?)\\s*,\\s*(\\d+(?:\\.\\d+)?)(\\%?)\\s*,\\s*(\\d+(?:\\.\\d+)?)(\\%?)\\s*(?:,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)',
keys   : 'x1,x2,x3,x4,x5,x6,h,s,l,a,r,p,g,p,b,p,a',
parser : function (o) {
	var c = new String(o),
		p = parseInt,
		h = Math.round;
	if (o.h) {
		c.h = +o.h;
		c.s = +o.s;
		c.l = +o.l;
	}
	else if (o.r ) {
		c.r = o.p ? Math.round(o.r * 2.55) : +o.r;
		c.g = o.p ? Math.round(o.g * 2.55) : +o.g;
		c.b = o.p ? Math.round(o.b * 2.55) : +o.b;
	}
	else if (o.x1) {
		c.r = p(o.x6 ? o.x1 + o.x2 : o.x1 + o.x1, 16);
		c.g = p(o.x6 ? o.x3 + o.x4 : o.x2 + o.x2, 16);
		c.b = p(o.x6 ? o.x5 + o.x6 : o.x3 + o.x3, 16);
	}
	c.a = o.a === undefined ? 1 : +o.a;
	return c;
}
});

});