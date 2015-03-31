/**
* 从当前 {@link Pattern|正则表达式模板} 对象还原出原生 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp|正则表达式对象} 。
* @see {@link Pattern#toString}
* @see {@link Pattern#toJSON}
* @access public
* @func Pattern.prototype.toRegExp
* @param {number} [mode=0]
* @param {number}  mode.0  - 直接使用创建当前 {@link Pattern|正则表达式模板} 对象时提供的 {@link Pattern|source} 创建为正则表达式。
* @param {number}  mode.1  - 将创建当前 {@link Pattern|正则表达式模板} 对象时提供的 {@link Pattern|source} 创建为整词匹配模式的正则表达式。
* @param {number}  mode.2  - 将创建当前 {@link Pattern|正则表达式模板} 对象时提供的 {@link Pattern|source} 创建为全文匹配模式的正则表达式。
* @param {string} [flags]  - 指定创建正则表达式所使用的 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags|flags} 。
* @returns {regexp}
* @example
* var txt = '{ top: 5px; z-index: 3; }';
* var num = new Pattern('\\d+');
* 
* console.log(txt.match(num.toRegExp(0, 'g')));    // [ '5', '3' ]
* console.log(txt.match(num.toRegExp(1, 'g')));    // [ '3' ]
* console.log(txt.match(num.toRegExp(2, 'g')));    // null
*/