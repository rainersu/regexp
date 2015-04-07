define([
	'../var/reg'
],
function(
	reg
) {'use strict';

reg({
name   : 'number',
source : '(?:\\-|\\+)?[0-9]+(?:\\.[0-9]+)?(?:e(?:\\-|\\+)?[0-9]+(?:\\.[0-9]+)?|(\\%))?|(?:\\-|\\+)?Infinity',
keys   : 'percent',
parser : function (o) {
	return parseFloat(o + '') / (o.percent ? 100 : 1);
}
});

});