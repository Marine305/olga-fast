module.exports = function (gulp, options, plugins) {

	return function (cd) {
		gulp.src([
			'./src/assets/js/**/*.js',
			'!./src/assets/js/main.js',
			'!./src/assets/js/init.js',
		])
			.pipe(plugins.uglify())
			.pipe(gulp.dest('./local/templates/html/js/'));

		cd();
	}
};
