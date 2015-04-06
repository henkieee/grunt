'use strict';

module.exports = function(grunt) {


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			output: ['clean/*']
		},
		typescript: {
			options: {
				// module: 'common.js'
				//ignores: ['typescript/js/lala.js']
			},
			all: {
				src: ['typescript/js/*ts', '!typescript/js/lala.js'],
				dest: 'clean/js/main.js'
			}
		},
		jshint: {
			options: {
				'-W869': false,
				'-W804': false,
				'-W032': false
			},
			files: ['clean/js/*js']
		},
		uglify: {
			development: {
				files: [{
					expand: true,
					cwd: 'clean/',
					src: '**/*.js',
					dest: 'clean/'
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