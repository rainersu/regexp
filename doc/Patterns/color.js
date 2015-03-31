/**
* 用于匹配符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的样式表色彩值。
* @var {Pattern} Pattern.patterns.color
* @example
* var pat = Pattern('color');
* console.log(pat.parse('background-color: hsla(240, 100%, 50%, 0.05); color: #F03;', false));
* 
* // [ 
* // { [String: 'hsla(240, 100%, 50%, 0.05)'] h: 240, s: 100, l: 50, a: 0.05 },
* // { [String: '#F03'] r: 255, g: 0, b: 51, a: 1 } 
* // ]
* 
* console.log(pat.is('rgb(100%, 3%, 20%)'));      // true
* console.log(pat.is('rgba(100, 3, 20, 0.5)'));   // true
*/