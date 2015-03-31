/**
* 用于匹配中国大陆地区手机号码。
* @var {Pattern} Pattern.patterns.mobile-cn
* @example
* var pat = Pattern('mobile-cn');
* console.log(pat.parse('MOBILE: (+86)189-1235-1181, 189-1235-1181'));
* 
* // [
* // { [String: '189-1235-1181'] serial: '1181', zone: '1235', carrier: '189' },
* // { [String: '189-1235-1181'] serial: '1181', zone: '1235', carrier: '189' }
* // ]
* 
* console.log(pat.is('+86 18912351181'));      // true
* console.log(pat.is('(86) 189 1235 1181'));   // true
* console.log(pat.is('(+86)189-1235-1181'));   // true
* console.log(pat.is('18912351181'));          // true
* console.log(pat.is('189 1235 1181'));        // true
* console.log(pat.is('189-1235-1181'));        // true
* 
* console.log(pat.is('28912351181'));          // false
* console.log(pat.is('1891235118'));           // false
*/