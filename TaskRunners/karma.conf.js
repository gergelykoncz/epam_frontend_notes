module.exports = function (config) {
	config.set({
		browsers: ['Chrome'],
		frameworks: ['jasmine'],
		reporters: ['coverage', 'progress'],
		coverageReporter: {
			type: 'html',
			dir: 'coverage/'
		},
		preprocessors: {
		'public/src/**/*.js': ['coverage']
		},
		files: [
			'public/vendor/jquery/dist/jquery.js',
			'public/vendor/angular/angular.js',
			'public/vendor/angular-mocks/angular-mocks.js',

			'public/src/**/*.js',

			'public/test/**/*.spec.js'
		]
	});
};