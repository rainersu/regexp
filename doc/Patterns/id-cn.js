/**
* 用于匹配中国大陆身份证号码。
* @var {Pattern} Pattern.patterns.id-cn
* @example
* var pat = Pattern('id-cn');
* console.log(pat.parse('44011119800315281X'));
* 
* // [ { [String: '44011119800315281X']
* //     code: 'X',
* //     sex: '1',
* //     serial: '281',
* //     day: '15',
* //     month: '03',
* //     year: '1980',
* //     district: '11',
* //     city: '01',
* //     province: '44'
* // } ]
* 
* console.log(pat.is('44011119800315281Z'));   // false
*/