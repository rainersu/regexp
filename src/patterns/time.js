define([
	'../var/cp',
	'../var/reg'
],
function(
	cp,
	reg
) {'use strict';

reg({
	name   : 'time',
	source : '(\\d{1,2})(\\s*[apAP]\\.?[mM]\\.?)|(\\d{1,2}(?::\\d{1,2}){1,2})(\\s*[apAP]\\.?[mM]\\.?)?',
	keys   : 'time,frame,time,frame',
	parser : function (o) {
		var x = o.frame,
			z = x && /P/i.test(x) ? 12 : 0,
		a = o.time.split(/\W+/);
		return cp(new String(o), {
			minute : +a[1] || 0,
			second : +a[2] || 0,
			hour   : z + (+a[0])
		});
	}
});

});