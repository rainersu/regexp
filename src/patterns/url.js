define([
	'../var/reg'
],
function(
	reg
) {'use strict';

reg({
	name   : 'url',
	source : '(?:([A-Za-z]+):)?(\\/{0,3})([0-9.\\-A-Za-z]+)(?::(\\d+))?(?:\\/([^?#]*))?(?:\\?([^#]*))?(?:#(.*))?',
	keys   : 'scheme,slash,host,port,path,query,hash'
});

});