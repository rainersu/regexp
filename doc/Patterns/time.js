/**
* 用于匹配时间格式。
* @var {Pattern} Pattern.patterns.time
* @example
* var pat = Pattern('time');
* console.log(pat.parse('9:15 A.M. or 10pm or 13:30:55'));
* 
* // [
* // { [String: '9:15 A.M'] minute: 15, second: 0, hour: 9 },
* // { [String: '10pm'] minute: 0, second: 0, hour: 22 },
* // { [String: '13:30:55'] minute: 30, second: 55, hour: 13 }
* // ]
* 
* console.log(pat.is('9:00'));        // true
* console.log(pat.is('09:00:03'));    // true
* console.log(pat.is('9:00am'));      // true
* console.log(pat.is('9am'));         // true
* console.log(pat.is('9A.M.'));       // true
* console.log(pat.is('9:00 A.M.'));   // true
* 
* console.log(pat.is('9'));           // false
* console.log(pat.is('9mm'));         // false
* console.log(pat.is('9:512'));       // false
*/