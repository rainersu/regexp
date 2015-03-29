module.exports = function(grunt) {"use strict";

var pkg = grunt.file.readJSON("package.json"),
	COPYRIGHT = '/*!\r\n' + pkg.name + ' v' + pkg.version + '\r\n' + pkg.homepage + '\r\n' + pkg.description + 
	            '\r\n(c) 2015 ' + pkg.author.name + '( ' + pkg.author.email + ' | ' + pkg.author.url + ' | QQ: ' + pkg.author.qq + 
	            ' )\r\n*/\r\n',
	MOD_SRC_PATH = 'src',
	MOD_DST_PATH = 'dist',
	DOC_SRC_PATH = 'doc',
	MOD_NAME = pkg.name.toLowerCase(),
	DOC_DST_PATH = MOD_DST_PATH + '/' + DOC_SRC_PATH,
	MOD_DST_FILE = MOD_DST_PATH + '/' + MOD_NAME + '.js',
	MOD_MIN_FILE = MOD_DST_PATH + '/' + MOD_NAME + '-' + pkg.version + '.min.js'; 

grunt.initConfig({
	pkg         : pkg,
	update_json : {
		options : {
			src    : 'package.json',
			indent : '\t'
		},
		bower   : { 
			dest   : 'bower.json',
			fields : [
				'name',
				'version',
				'homepage',
				'description',
				'main',
				'keywords',
				'repository',
				{
					authors: [ 'author' ],
					license : 'licenses/0/type'
				}
			]
		}
	}
});

require("load-grunt-tasks")(grunt);

grunt.registerTask('distdoc', [  ]);
grunt.registerTask('distmod', [ 'update_json' ]);

grunt.registerTask('default', [ 'distdoc', 'distmod'  ]);

};