'use strict';

module.exports = function (gulp, options, plugins, webpackconfig) {

	return function (cb) {
		
		gulp.src([
				'src/components/**/*.js'
			])
			.pipe(plugins.plumber())
			.pipe(plugins.babel({
				presets: ['@babel/preset-env']
			}))
			.pipe(gulp.dest(options.path.build.components))
			.pipe(plugins.uglify())
			.pipe(plugins.rename({
				suffix: '.min'
			}))
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest(options.path.build.components));
		
		cb();
	}
};
