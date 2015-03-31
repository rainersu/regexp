/**
* 用于匹配 {@link http://en.wikipedia.org/wiki/Email_address 邮件地址} 。
* @var {Pattern} Pattern.patterns.email
* @example
* var pat = Pattern('email');
* 
* console.log(pat.parse('admin@me.com'));
* // [ { [String: 'admin@me.com'] domain: 'me.com', user: 'admin' } ]
* 
* console.log(pat.match('他俩的邮件地址是candy@me.com和frank@live.com'));
* // [ 'candy@me.com', 'frank@live.com' ]
*/