define([
	'../var/reg'
],
function(
	reg
) {'use strict';

reg({
	name   : 'mobile-cn',
	source : '(?:\\+86[- ]|\\(\\+?86\\)[- ]?)?(1\\d{2})[- ]?(\\d{4})[- ]?(\\d{4})',
	keys   : 'carrier,zone,serial'
});

});