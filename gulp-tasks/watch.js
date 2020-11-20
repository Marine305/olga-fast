module.exports = function (gulp, options, plugins) {

	return function (cb) {

		const imagesPath = [
			'./src/blocks/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
			'./src/components/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
			'./src/partials/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
			'./src/mixins/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
			'./src/assets/images/**/*.{png,jpg,jpeg,gif,ico,svg,webp}'
		];

		// STYLES
		gulp.watch([
			options.path.watch.sass,
			'!local/templates/html/critical.css',
		], gulp.series(gulp.series('sass-styles', 'sass-wysywig', 'sass-component')));

		gulp.watch(['./src/**/critical.{scss,sass}'], gulp.series('sass-crit', 'pug'));
		gulp.watch(['src/assets/css/**/*.{scss,sass}'], gulp.series('sass-crit', 'pug', 'sass-styles'));
		gulp.watch(['src/components/**/style.{scss,sass}'], gulp.series('sass-component', 'sass-styles'));
		gulp.watch(['src/mixins/**/style.{scss,sass}'], gulp.series('sass-crit', 'pug', 'sass-styles'));

		// gulp.watch([
		// 	options.path.build.html + 'styles.css',
		// 	options.path.build.html + 'critical.min.css',
		// 	options.path.build.html + 'css/styles.min.css',
		// 	options.path.build.html + 'css/components.min.css',
		// ], gulp.series('sass-bundle'));
		// PUG
		global.watch = true;
		gulp.watch([options.path.watch.pug], gulp.series('pug-watch'))
			.on('all', function (event, filepath) {
				global.emittyChangedFile = filepath;
			});
		gulp.watch([options.path.watch.pug_ajax], gulp.series('pug-ajax-watch'))
			.on('all', function (event, filepath) {
				global.emittyChangedFile = filepath;
			});

		// JS
		gulp.watch('./src/**/*.js', gulp.series('scripts', 'scripts-components')).on("change", plugins.browserSync.reload);
		gulp.watch('./src/assets/js/vendor/**/*.js', gulp.series('scripts-libs')).on('change', plugins.browserSync.reload);

		// HTML
		gulp.watch(options.path.build.html + '*.html').on('change', plugins.browserSync.reload);

		// PICTURES
		gulp.watch(imagesPath, gulp.series('imagemin'));
		gulp.watch([options.path.src.sprites + '**/*.svg'], gulp.series('svg'));

		// VIDEO
		gulp.watch(['./src/assets/video/*.*'], gulp.series('video'));

		cb();
	};

};
