/**
* 正则表达式模板化的封装类。为被封装的正则表达式提供更简易快捷的使用方式。
* @class Pattern
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp}
* @see {@link https://msdn.microsoft.com/en-us/library/ie/9dthzd08(v=vs.94).aspx}
* @param {string} source - 已注册的正则表达式模板名称，参见 {@link Pattern.reg|reg} 方法 和 {@link Pattern.patterns|patterns} 对象。或正则表达式原始字符串，等同于 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source|RegExp.prototype.source} 。
* @param {string|string[]} [keys] - 用于 {@link Pattern#parse|parse} 方法的键值数组。也可以是用英文逗号或分号或空格分隔的字符串形式。
* @param {Pattern~parseCallback} [parser] - 用于 {@link Pattern#parse|parse} 方法的回调函数。
* @param {boolean} [ignoreCase=false] - 正则表达式是否忽略字母大小写。参见  {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase|RegExp.prototype.ignoreCase} 。
* @example
* var cnID = new Pattern(
*     '(\\d{2})(\\d{2})(\\d{2})(\\d{4})(\\d{2})(\\d{2})(\\d{2}(\\d{1}))([\\dX]{1})',
*     'province,city,district,year,month,day,serial,sex,code',
*     function (o) {
*         return {
*             sex: +o.sex % 2 ? 'male' : 'female',
*             birthday: new Date(+o.year, +o.month - 1, +o.day).toLocaleDateString()
*         }
*     }
* );
* console.log(cnID.parse('44011119800315281X'));   // [ { sex: 'male', birthday: '1980-03-15' } ]
*/

/**
* 用于 {@link Pattern#parse|parse} 方法的回调函数。如果有返回值，则该返回值将取代当前匹配获取结果。否则将使用原匹配获取结果。
* @see {@link Pattern#parse}
* @callback Pattern~parseCallback
* @param {object} match - 当前被遍历到的已根据 {@link Pattern keys} 被处理为键值对的匹配获取结果。
* @returns {*} 
*/

/**
* 用于 {@link Pattern#replace|replace} 方法的回调函数。返回值将用于在原始输入字符串中取代匹配获取结果。
* @see {@link Pattern#replace}
* @callback Pattern~replaceCallback
* @param {string} match - 当前被匹配到的单个完整结果。相当于 `$&` 。
* @param {...string} submatchs -当前获取到的一个或多个子匹配结果。相当于 `$1`、`$2` ……
* @param {number} offset - 当前完整匹配结果 `match` 在原始输入字符串中的开始索引。 
* @param {string} str - 原始输入字符串。
* @returns {string} 
*/