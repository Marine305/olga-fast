'use strict';

module.exports = function (gulp, options, plugins) {

	return function (cb) {

		gulp.src([options.path.src.components_ajax])
			.pipe(plugins.plumber())
			//.pipe(plugins.sourcemaps.init())
			.pipe(plugins.pug({
				pretty: true,
				plugins: [plugins.pugIncludeGlob()],
			}))
			.pipe(plugins.inlinesource())
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest(options.path.build.components));

		cb();
	}
};
