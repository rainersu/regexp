/**
* 测试一个字符串是否能部分匹配 {@link Pattern|正则表达式模板} 。
* @see {@link Pattern#is}
* @see {@link Pattern#index}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search}
* @access public
* @func Pattern.prototype.in
* @param {string} str - 要检测的字符串
* @param {boolean} [wholeWord=false]
* @param {boolean} wholeWord.true  - 整词匹配。
* @param {boolean} wholeWord.false - 不要求匹配整词。也即不检测两侧单词边界。 
* @returns {boolean}
* @example
* var match = new Pattern('\\d+');
* console.log(match.in('01'));           // true
* console.log(match.in('0x'));           // true
* console.log(match.in('0x', true));     // false
* 
* var match = new Pattern('^\\d+$');
* console.log(match.in('01'));           // true
* console.log(match.in('0x'));           // false
* console.log(match.in('0x', true));     // false
* 
* var match = new Pattern('\\b\\d+\\b');
* console.log(match.in('01'));           // true
* console.log(match.in('0x'));           // false
* console.log(match.in('0x', true));     // false
*/