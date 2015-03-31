/**
* 在字符串中搜索第一个匹配结果的位置。返回匹配结果的索引值。如果没找到则返回 `-1` 。
* @see {@link Pattern#is}
* @see {@link Pattern#in}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search}
* @access public
* @func Pattern.prototype.index
* @param {string} str - 要检测的字符串
* @param {boolean} [wholeWord=false]
* @param {boolean} wholeWord.true  - 整词匹配。
* @param {boolean} wholeWord.false - 不要求匹配整词。也即不检测两侧单词边界。 
* @returns {number} 
* @example
* var match = new Pattern('\\d+');
* console.log(match.index('01'));           //  0
* console.log(match.index('0x'));           //  0
* console.log(match.index('0x', true));     // -1
* 
* var match = new Pattern('^\\d+$');
* console.log(match.index('01'));           //  0
* console.log(match.index('0x'));           // -1
* console.log(match.index('0x', true));     // -1
* 
* var match = new Pattern('\\b\\d+\\b');
* console.log(match.index('01'));           //  0
* console.log(match.index('0x'));           // -1
* console.log(match.index('0x', true));     // -1
*/