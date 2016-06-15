module.exports = function (grunt) {

	grunt.initConfig({
		clean: {
			dist: {
				src: ['public/dist']
			}
		},

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			js: ['public/src/js/**']
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		},

		ngAnnotate: {
			dist: {
				files: {
					'public/dist/js/annotate.js': ['public/src/js/pokeApp.js', 'public/src/js/pokeCache.js', 'public/src/js/pokeService.js', 'public/src/js/pokeController.js', 'public/src/js/windowScroll.js']
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'public/dist/js/vendor.js': ['public/vendor/jquery/dist/jquery.js', 'public/vendor/angular/angular.js'],
					'public/dist/js/dist.js': ['public/src/js/pokemon.js', 'public/dist/js/annotate.js']
				}
			}
		},

		cssmin: {
			dist: {
				files: {
					'public/dist/css/vendor.css': ['public/vendor/bootstrap/dist/css/bootstrap.css'],
					'public/dist/css/dist.css': ['public/src/css/site.css']
				}
			}
		},

		copy: {
			html: {
				expand: true,
				cwd: 'public',
				src: '*.html',
				dest: 'public/dist'
			}
		},

		useref: {
			html: 'public/dist/*.html',
			temp: 'useref'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-useref');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-ng-annotate');

	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('compile', ['ngAnnotate', 'uglify', 'cssmin', 'copy:html', 'useref']);

	grunt.registerTask('build', ['clean', 'lint', 'karma', 'compile']);
};