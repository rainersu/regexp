/**
* 用于匹配符合 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates|ECMA Script} 标准定义格式的数字值。支持指数格式和百分数格式。暂不支持十六进制格式。
* @var {Pattern} Pattern.patterns.number
* @example
* var pat = new Pattern('number');
* console.log([ 'Infinity', '-1.233.3', '-123.3e-2', 'a-123.3e-2b', 'a-123.3%b' ].map(function (str) {
*     return pat.match(str)[0];
* }));
* 
* // [ 'Infinity', '-1.233', '-123.3e-2', '-123', '-123.3%' ]
* @example
* var pat = new Pattern('number');
* console.log([ 'Infinity', '-1.233.3', '-123.3e-2', 'a-123.3e-2b', 'a-123.3%b' ].map(function (str) {
*     return pat.parse(str, false)[0];
* }));
* 
* // [ Infinity, -1.233, -1.233, -1.233, -1.233 ]
*/