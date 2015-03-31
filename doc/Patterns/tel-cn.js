/**
* 用于匹配中国大陆地区固话号码。
* @var {Pattern} Pattern.patterns.tel-cn
* @example
* var pat = Pattern('tel-cn');
* console.log(pat.parse('TEL: (+86)21 5568-3122, (86-21) 55683122', false));
* 
* // [
* // { [String: '(+86)21 5568-3122'] number: '55683122', zone: 21 },
* // { [String: '(86-21) 55683122']  number: '55683122', zone: 21 }
* // ]
* 
* console.log(pat.is('+86 21 55683122'));     // true
* console.log(pat.is('(+86)21 5568-3122'));   // true
* console.log(pat.is('(86-21) 55683122'));    // true
* console.log(pat.is('(021)55683122'));       // true
* console.log(pat.is('021 55683122'));        // true
* 
* console.log(pat.is('(+98)21 5568-3122'));   // false
* console.log(pat.is('021 556831'));          // false
*/