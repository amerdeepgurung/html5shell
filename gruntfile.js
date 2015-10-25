module.exports = function (grunt) {
    'use strict';
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({

		// Reference package.json
		pkg: grunt.file.readJSON('package.json'),

		// Compass
		compass: {
			dist: {
				options: {config: 'config.rb'}
			}
		},
		
		// Minify JS
		uglify: {
			my_target: {
				files: {
					'deploy/assets/scripts/scripts-min.js': ['src/scripts/config.js', 'src/scripts/utilities.js']
				}
			}
		},

		// Watch
		watch: {
			compass: {
				files: 'src/styles/*.scss',
				tasks: ['compass']
			},

			jsminify: {
				files: 'src/scripts/*.js',
				tasks: ['uglify']
			},

			livereload: {
				options: {livereload: true},
				files: ['deploy/assets/styles/*.css', 'deploy/assets/scripts/*.js', 'deploy/*.html', 'img/*']
			}
		}

	});
	grunt.registerTask('default', ['watch']);
};