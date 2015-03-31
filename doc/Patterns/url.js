/**
* 用于匹配 {@link http://en.wikipedia.org/wiki/Uniform_resource_locator URL} 。
* @var {Pattern} Pattern.patterns.url
* @example
* var pat = Pattern('url');
* console.log(pat.parse('smtp://www.me.com/user?id=3'));
* 
* // [ { [String: 'smtp://www.me.com/user?id=3']
* //     query: 'id=3',
* //     path: 'user',
* //     host: 'www.me.com',
* //     slash: '//',
* //     scheme: 'smtp'
* // } ]
* 
* console.log(pat.is('www.apple.com'));        // true
* console.log(pat.is('file:///index.html'));   // true
* console.log(pat.is('www.mac.com\\index'));   // false
*/