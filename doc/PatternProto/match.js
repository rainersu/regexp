/**
* 对字符串做全文搜索，并将所有符合 {@link Pattern|正则表达式模板} 的匹配结果返回为数组。如果没找到则返回空数组。
* @see {@link Pattern#parse}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match}
* @access public
* @func Pattern.prototype.match
* @param {string} str - 要搜索的字符串。
* @param {boolean} [wholeWord=true]
* @param {boolean}  wholeWord.true  - 整词匹配。
* @param {boolean}  wholeWord.false - 不要求匹配整词。也即不检测两侧单词边界。
* @returns {string[]}
* @example
* var match = new Pattern('\\d+');
* console.log(match.match('a0b12c'));           // []
* console.log(match.match('a0b12c', false));    // [ '0', '12' ]
* console.log(match.match('abcdef'));           // []
* 
* var match = new Pattern('\\b\\d+\\b');
* console.log(match.match('a0b12c'));           // []
* console.log(match.match('0-12-c'));           // [ '0', '12' ]
* console.log(match.match('0-12-c', false));    // [ '0', '12' ]
*/