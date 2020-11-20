const gulp = require('gulp'),
	options = require('./options.js'),
	webpackconfig = require('./webpack.config.js'),
	plugins = require('gulp-load-plugins')();


plugins.browserSync = require('browser-sync');
plugins.babel = require('gulp-babel');
plugins.source = require('vinyl-source-stream');
plugins.path = require('path');
plugins.del = require('del');
plugins.globOnce = require('node-sass-glob-importer');
plugins.pugIncludeGlob = require('pug-include-glob');
plugins.emitty = require('emitty').setup('src', 'pug', { makeVinylFile: true });
plugins.webpack = require('webpack');
plugins.webpackStream = require('webpack-stream');
plugins.inlinesource = require('gulp-inline-source');
plugins.gcmq = require('gulp-group-css-media-queries');
plugins.gm = require('gulp-gm');
plugins.tap = require('gulp-tap');
plugins.imagemagickCli = require('imagemagick-cli');
plugins.shellExec = require('shell-exec');
plugins.fs = require('fs');
plugins.flatten = require('gulp-flatten');
plugins.debug = require('gulp-debug');


gulp.task('clean', require('./gulp-tasks/clean')(gulp, options, plugins));
gulp.task('html-join-file', require('./gulp-tasks/html-join-file')(gulp, options, plugins));
gulp.task('pug', require('./gulp-tasks/pug')(gulp, options, plugins));
gulp.task('pug-ajax', require('./gulp-tasks/pug-ajax')(gulp, options, plugins));
gulp.task('pug-ajax-watch', require('./gulp-tasks/pug-ajax-watch')(gulp, options, plugins));
gulp.task('pug-watch', require('./gulp-tasks/pug-watch')(gulp, options, plugins));
gulp.task('sass-styles', require('./gulp-tasks/sass-styles')(gulp, options, plugins));
gulp.task('sass-component', require('./gulp-tasks/sass-component')(gulp, options, plugins));
gulp.task('sass-wysywig', require('./gulp-tasks/sass-wysywig')(gulp, options, plugins));
gulp.task('sass-crit', require('./gulp-tasks/sass-crit')(gulp, options, plugins));
gulp.task('sass-bundle', require('./gulp-tasks/sass-bundle')(gulp, options, plugins));
gulp.task('scripts', require('./gulp-tasks/scripts')(gulp, options, plugins, webpackconfig));
gulp.task('scripts-components', require('./gulp-tasks/scripts-components')(gulp, options, plugins, webpackconfig));
gulp.task('scripts-libs', require('./gulp-tasks/scripts-libs')(gulp, options, plugins));
gulp.task('sync', require('./gulp-tasks/sync')(gulp, options, plugins));
gulp.task('svg', require('./gulp-tasks/svg')(gulp, options, plugins));
// gulp.task('svgBg', require('./gulp-tasks/svgBg')(gulp, options, plugins));
gulp.task('imagemin', require('./gulp-tasks/imagemin')(gulp, options, plugins));
gulp.task('video', require('./gulp-tasks/video')(gulp, options, plugins));
gulp.task('fonts', require('./gulp-tasks/fonts')(gulp, options, plugins));
gulp.task('favicon', require('./gulp-tasks/favicon')(gulp, options, plugins));
gulp.task('watch', require('./gulp-tasks/watch')(gulp, options, plugins));
gulp.task('deploy', require('./gulp-tasks/deploy')(gulp, options, plugins));



gulp.task('default', gulp.series(

	'sass-crit',
	'pug',
	'pug-ajax',
	'sass-styles',
	'sass-wysywig',
	'sass-component',
	// 'sass-bundle',

	gulp.parallel(
		'svg',
		// 'svgBg',
		'imagemin',
		'fonts',
		'scripts-libs',
		'scripts',
		'scripts-components',
		'watch',
		// 'favicon',
		// 'video,
	),
	'sync',
));
gulp.task('build', gulp.series(
	'sass-crit',
	'pug',
	'pug-ajax',
	'sass-styles',
	'sass-wysywig',
	'sass-component',
	'svg',
	'imagemin',
	'fonts',
	'scripts-libs',
	'scripts',
	'scripts-components',
	'html-join-file',
));
