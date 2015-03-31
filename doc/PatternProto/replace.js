/**
* 在字符串中搜索并替换匹配结果。
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace String.prototype.replace}
* @access public
* @func Pattern.prototype.replace
* @param {string} str - 要搜索的字符串。
* @param {string|Pattern~replaceCallback} substitute - 替换匹配结果的字符串或回调函数。参见 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace|String.prototype.replace} 。
* @param {boolean} [wholeWord=false]
* @param {boolean} wholeWord.true  - 整词匹配。
* @param {boolean} wholeWord.false - 不要求匹配整词。也即不检测两侧单词边界。
* @param {string} [flags='g']  - 指定正则表达式所使用的 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags|flags} 。
* @returns {string} 
* @example
* var rex = new Pattern('\\d+');
* 
* console.log(rex.replace('{ top: 5; z-index: 3; }', '$&em'));           
* // { top: 5em; z-index: 3em; }
* 
* console.log(rex.replace('{ top: 5; z-index: 3; }', function(i) { return i + 'em'; })); 
* // { top: 5em; z-index: 3em; }
*/