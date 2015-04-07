
var Pattern = require('../../sumi-regexp');

var cnID = new Pattern(
    '(\\d{2})(\\d{2})(\\d{2})(\\d{4})(\\d{2})(\\d{2})(\\d{2}(\\d{1}))([\\dX]{1})',
    'province,city,district,year,month,day,serial,sex,code',
    function (o) {
        return {
            sex: +o.sex % 2 ? 'male' : 'female',
            birthday: new Date(+o.year, +o.month - 1, +o.day).toLocaleDateString()
        }
    }
);
console.log(cnID.parse('44011119800315281X'));   // [ { sex: 'male', birthday: '1980-03-15' } ]

var pat = Pattern('color');
console.log(pat.parse('background-color: hsla(240, 100%, 50%, 0.05); color: #F03;', false));

// [ 
// { [String: 'hsla(240, 100%, 50%, 0.05)'] h: 240, s: 100, l: 50, a: 0.05 },
// { [String: '#F03'] r: 255, g: 0, b: 51, a: 1 } 
// ]

var pat = new Pattern('number');

console.log([ 'Infinity', '-1.233.3', '-123.3e-2', 'a-123.3e-2b', 'a-123.3%b' ].map(function (str) {
    return pat.match(str)[0];
}));

// [ 'Infinity', '-1.233', '-123.3e-2', '-123', '-123.3%' ]

console.log([ 'Infinity', '-1.233.3', '-123.3e-2', 'a-123.3e-2b', 'a-123.3%b' ].map(function (str) {
    return pat.parse(str, false)[0];
}));

// [ Infinity, -1.233, -1.233, -1.233, -1.233 ]

var pat = Pattern('email');
console.log(pat.parse('admin@me.com'));
// [ { [String: 'admin@me.com'] domain: 'me.com', user: 'admin' } ]

var pat = Pattern('id-cn');
console.log(pat.parse('44011119800315281X'));

// [ { [String: '44011119800315281X']
//     code: 'X',
//     sex: '1',
//     serial: '281',
//     day: '15',
//     month: '03',
//     year: '1980',
//     district: '11',
//     city: '01',
//     province: '44'
// } ]

var pat = Pattern('url');
console.log(pat.parse('smtp://www.me.com/user?id=3'));

// [ { [String: 'smtp://www.me.com/user?id=3']
//     query: 'id=3',
//     path: 'user',
//     host: 'www.me.com',
//     slash: '//',
//     scheme: 'smtp'
// } ]

var pat = Pattern('time');
console.log(pat.parse('9:15 A.M. or 10pm or 13:30:55'));

// [
// { [String: '9:15 A.M'] minute: 15, second: 0, hour: 9 },
// { [String: '10pm'] minute: 0, second: 0, hour: 22 },
// { [String: '13:30:55'] minute: 30, second: 55, hour: 13 }
// ]
