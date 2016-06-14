module.exports = function (config) {
	config.set({
		browsers: ['Chrome'],
		frameworks: ['jasmine'],
		files: [
			'public/vendor/jquery/dist/jquery.js',
			'public/vendor/angular/angular.js',
			'public/src/**/*.js',

			'public/test/**/*.spec.js'
		]
	});
};