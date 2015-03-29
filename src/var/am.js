define([
	'./toStr'
],
function(
	toStr
) {'use strict';

function am (v) {
	return toStr.call(v).split(/\W+/)[2].toLowerCase();
}

return am;

});