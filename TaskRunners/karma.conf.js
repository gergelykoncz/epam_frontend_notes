module.exports = function (config) {
	config.set({
		browsers: ['Chrome'],
		frameworks: ['jasmine', 'requirejs'],
		files: [
			'public/vendor/requirejs/require.js',



			{pattern: 'public/src/**/*.js', included: false},

			'public/test/test-config.js',
			{pattern: 'public/test/**/*.spec.js', included: false}
		],
		plugins: ['karma-requirejs', 'karma-chrome-launcher', 'karma-jasmine']
	});
};