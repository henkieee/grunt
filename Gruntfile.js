'use strict';

module.exports = function(grunt) {


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			options: {

			},
			files: ['dist/*'],
			onlyjs: ['dist/**/*.js']
		},
		typescript: {
			options: {
				// module: 'common.js'
				//ignores: ['typescript/js/lala.js']
			},
			all: {
				src: ['dev/js/*ts', '!dev/js/lala.js'],
				dest: 'dist/js/main.js'
			}
		},
		jshint: {
			options: {
				'-W869': false,
				'-W804': false,
				'-W032': false
			},
			files: ['dist/js/*js']
		},
		uglify: {
			development: {
				files: [{
					expand: true,
					cwd: 'dist/',
					src: '**/*.js',
					dest: 'dist/'
				}] 
			},
			options: {
				compress: {
					drop_console: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', [
			'clean',
			'typescript', 
			'jshint',
			'uglify'
			]
		);
};