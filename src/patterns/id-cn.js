define([
	'../var/reg'
],
function(
	reg
) {'use strict';

reg({
	name   : 'id-cn',
	source : '(\\d{2})(\\d{2})(\\d{2})(\\d{4})(\\d{2})(\\d{2})(\\d{2}(\\d{1}))([\\dX]{1})',
	keys   : 'province,city,district,year,month,day,serial,sex,code'
});

});