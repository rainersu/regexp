/**
* 从当前 {@link Pattern|正则表达式模板} 对象转换出字符串。转换结果为从该对象转换出的原生 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp|正则表达式对象} 的字面量表示。
* @see {@link Pattern#toRegExp}
* @see {@link Pattern#toJSON}
* @access public
* @func Pattern.prototype.toString
* @returns {string}
* @example
* var pat = new Pattern('\\d+');
* pat.ignoreCase = true;
* console.log(pat + '');         // /\d+/i
* console.log(pat.toString());   // /\d+/i
*/