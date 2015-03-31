define([
	'../var/reg'
],
function(
	reg
) {'use strict';

reg({
	name   : 'tel-cn',
	source : '(?:\\+86[- ](\\d{2,3})|\\(\\+?86\\)[- ]?(\\d{2,3})|\\(\\+?86[- ](\\d{2,3})\\)|\\(0(\\d{2,3})\\)|0(\\d{2,3}))[- ]?(\\d{3,4}[- ]?\\d{4})',
	keys   : 'zone,zone,zone,zone,zone,number',
	parser : function (o) {'use strict';
		o.number = o.number.replace(/[-\s]+/g, '');
		o.zone = +o.zone;
		return o;
	}
});

});