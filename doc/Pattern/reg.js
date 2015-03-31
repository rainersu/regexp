/**
* 向 {@link Pattern.patterns|patterns} 集合注册新的 {@link Pattern|正则表达式模板} 。
* @see {@link Pattern.patterns}
* @access public
* @func Pattern.reg
* @param {object|object[]} src - 用于创建新 {@link Pattern|正则表达式模板} 实例的参数集合。如果要批量注册，可以使用参数集合的数组。
* @param {string} src.name - 正则表达式模板的名称。供以后使用 `Pattern('name')` 的方法直接调用。
* @param {string} src.source - 正则表达式原始字符串，等同于 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source|RegExp.prototype.source} 。
* @param {string|string[]} [src.keys] - 用于 {@link Pattern#parse|parse} 方法的键值数组。也可以是用英文逗号或分号或空格分隔的字符串形式。
* @param {Pattern~execCallback} [src.parser] - 用于 {@link Pattern#parse|parse} 方法的回调函数。
* @param {boolean} [src.ignoreCase=false] - 正则表达式是否忽略字母大小写。参见  {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase|RegExp.prototype.ignoreCase} 。
* @example
* Pattern.reg({
*     name   : 'mail',
*     source : '([-0-9a-zA-Z.+_]+)@([-0-9a-zA-Z.+_]+\\.[a-zA-Z]{2,4})',
*     keys   : 'user,domain'
* });
* console.log(Pattern('mail') instanceof Pattern);   // true
* 
* console.log(Pattern('mail').parse('admin@github.com'));
* // [ { [String: 'admin@github.com'] domain: 'github.com', user: 'admin' } ]
*/