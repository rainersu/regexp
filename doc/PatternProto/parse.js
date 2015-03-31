/**
* 对字符串做全文搜索，将每一个匹配结果根据由 {@link Pattern keys} 指定的键值解析为对象，并将所有结果返回为数组。如果没找到则返回空数组。
* @see {@link Pattern#match}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match}
* @access public
* @func Pattern.prototype.parse
* @param {string} str - 要搜索的字符串。
* @param {boolean} [wholeWord=true]
* @param {boolean}  wholeWord.true  - 整词匹配。
* @param {boolean}  wholeWord.false - 不要求匹配整词。也即不检测两侧单词边界。  
* @returns {object[]} 
* @example
* var num = new Pattern('(\\d+)(?:\\.(\\d+))?', 'int, dec');
* 
* console.log(num.parse('1.2'));           
* // [ { [String: '1.2'] dec: '2', int: '1' } ]
* 
* console.log(num.parse('1.2 + 3.3'));     
* // [ { [String: '1.2'] dec: '2', int: '1' }, { [String: '3.3'] dec: '3', int: '3' } ]
* @example
* var num = new Pattern('(\\d+)(?:\\.(\\d+))?', 'int, dec', function (o) {
*     return o + 'px';
* });
* 
* console.log(num.parse('{ top: 5; left: 3 }'));   // [ '5px', '3px' ]
*/