
var Pattern = require('../../sumi-regexp');

console.log(Pattern('time').parse('9:15 A.M. or 10pm or 13:30:55'));
console.log(Pattern('id-cn').parse('44011119800315281X'));

var match = Pattern('color');
console.log(match.parse('rgb(100%, 3%, 20%)'));
console.log(match.parse('hsla(240, 100%, 50%, 0.05)'));
console.log(match.parse('#FF0033'));
console.log(match.parse('#F03'));