/**
* 测试一个字符串是否能完整匹配 {@link Pattern|正则表达式模板} 。
* @see {@link Pattern#in}
* @see {@link Pattern#index}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search}
* @access public
* @func Pattern.prototype.is
* @param {string} str - 要检测的字符串
* @returns {boolean}
* @example
* var match = new Pattern('\\d+');
* console.log(match.is('01'));           // true
* console.log(match.is('0b'));           // false
* 
* var match = new Pattern('^\\d+$');
* console.log(match.is('01'));           // true
* console.log(match.is('0b'));           // false
* 
* var match = new Pattern('\\b\\d+\\b');
* console.log(match.is('01'));           // true
* console.log(match.is('0b'));           // false
*/