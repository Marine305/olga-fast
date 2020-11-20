module.exports = function (gulp, options, plugins) {

	return function (cb) {

		gulp.src([
			options.path.build.html + 'styles.css',
			options.path.build.html + 'css/styles.min.css',
			options.path.build.html + 'css/components.min.css',
		])
			.pipe(plugins.plumber())
			.pipe(plugins.concat('bundle.min.css'))
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest('./local/templates/html/css/'))
		cb();
	}
};
