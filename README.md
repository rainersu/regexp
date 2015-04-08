# [sumi-regexp](https://www.npmjs.com/package/sumi-regexp)
A wrapper for the JavaScript RegExp object with a library of preset regular expressions to make it simple and smart. Stand alone mod, no dependencies.

Target environments
-------------------

- IE 6+
- Latest Stable: Firefox, Chrome, Safari, Opera
- [Node.js](https://nodejs.org/) & other non-browser environments or browser extensions

Quick start
-----------

Four quick start options are available:

- [Download the latest release](https://github.com/rainersu/regexp/archive/v1.0.0.zip)
- Clone the repo: `git clone https://github.com/rainersu/regexp.git`
- Install with [Bower](http://bower.io): `bower install sumi-regexp`
- Install with [npm](https://www.npmjs.com): `npm install sumi-regexp`

Example use
-----------

Including in a browser:

```html
<script type='text/javascript' src='/path/to/sumi-regexp-1.0.0.min.js'></script>
<script type='text/javascript'>
var Pattern = sumiRegExp;
var pat = new Pattern('color');
console.log(pat.parse('background-color: hsla(240, 100%, 50%, 0.05); color: #F03;', false));

/* [ 
{ [String: 'hsla(240, 100%, 50%, 0.05)'] h: 240, s: 100, l: 50, a: 0.05 },
{ [String: '#F03'] r: 255, g: 0, b: 51, a: 1 }
] */

</script>
```

As a module that works with AMD(e.g., [RequireJS](http://requirejs.org/)):

```JavaScript
define(['/path/to/sumi-regexp'], function(Pattern) {
	var pat = new Pattern('email');
	console.log(pat.parse('admin@me.com'));
	
	// [ { [String: 'admin@me.com'] domain: 'me.com', user: 'admin' } ]
	
});
```

Including in a CommonJS environment(e.g., [Node.js](https://nodejs.org/)):

```JavaScript
var Pattern = require('/path/to/sumi-regexp');
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
console.log(cnID.parse('44011119800315281X'));  // [ { sex: 'male', birthday: '1980-03-15' } ]
```

Build from source
-----------------

First, you need to have [Node.js](https://nodejs.org/) and [Grunt](http://gruntjs.com/) installed.

```Shell
$ git clone git@github.com:rainersu/regexp.git
$ npm install -g grunt-cli
$ cd regexp
$ npm install
$ grunt
```

It provides compiled JS (`sumi-regexp.*`), as well as compiled and minified JS (`sumi-regexp.min.*`). JS [source maps](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors) (`sumi-regexp.*.map`) are available for use with certain browsers' developer tools.

Running demos for testing
-------------------------

```Shell
$ grunt test
```

Build & running documentation locally
-------------------------------------

```Shell
$ grunt help
```

Sorry, the documentation is currently offered only in the Chinese language. Do you have time to help me with some Chinese - English translations?

How to contact me
-----------------

- [rainersu@foxmail.com](mailto:rainersu@foxmail.com)
- [http://cn.linkedin.com/in/rainersu](http://cn.linkedin.com/in/rainersu)
- [http://site.douban.com/185696/](http://site.douban.com/185696/)
- [http://rainersu.github.io](http://rainersu.github.io)
- ``QQ: 2627001536``

Copyright and license
---------------------

Copyright 2015 [Rainer Su](mailto:rainersu@foxmail.com) ([苏昱](http://cn.linkedin.com/in/rainersu)).

Code and documentation is free to use under the [MIT license](https://github.com/rainersu/regexp/blob/master/LICENSE.md).