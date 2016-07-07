var gulp = require('gulp'),
	del = require('del'),
	nodemon = require('gulp-nodemon'),
	useref = require('gulp-useref'),
	jshint = require('gulp-jshint'),
	jshintStylish = require('jshint-stylish'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	ngAnnotate = require('gulp-ng-annotate'),
	watch = require('gulp-watch'),
	KarmaServer = require('karma').Server;

gulp.task('start', function () {
	nodemon({
		script: 'server.js'
	});
});

gulp.task('clean', function (done) {
	del.sync('public/dist');
	done();
});

gulp.task('lint', function () {
	return gulp.src(['public/src/js/**'])
		.pipe(jshint())
		.pipe(jshint.reporter(jshintStylish, {verbose: true}))
		.pipe(jshint.reporter('fail'));
});

gulp.task('compile', function () {
	return gulp.src('public/*.html')
		.pipe(useref())
		.pipe(gulpif('*.js', ngAnnotate()))
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulp.dest('public/dist'));
});

gulp.task('karma', function (done) {
	new KarmaServer({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done).start();
});

gulp.task('watch', function () {
	return gulp.watch('public/src/**', ['useref'])
});

gulp.task('requirejsBuild', function() {
	rjs({
		baseUrl: 'path/to/your/base/file.js',
		out: 'FILENAME\_TO\_BE\_OUTPUTTED',
		shim: {
			// standard require.js shim options
		}
		// ... more require.js options
	})
		.pipe(gulp.dest('public/dist/')); // pipe it to the output DIR
});

gulp.task('build', ['clean', 'lint', 'karma', 'compile']);