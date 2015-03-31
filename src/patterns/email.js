define([
	'../var/reg'
],
function(
	reg
) {'use strict';

reg({
	name   : 'email',
	source : '([-0-9a-zA-Z.+_]+)@([-0-9a-zA-Z.+_]+\\.[a-zA-Z]{2,4})',
	keys   : 'user,domain'
});

});