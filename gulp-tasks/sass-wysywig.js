module.exports = function(gulp, options, plugins) {

	return function () {
		return gulp.src(options.path.src.styles + 'wysiwyg.{scss,sass}')
			.pipe(plugins.plumber())
			//.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass({
				outputStyle: 'expanded',
				errLogToConsole: true,
				importer: [plugins.globOnce()]
			}))
			.on('error', plugins.notify.onError({
				title: 'SASS error',
				message: '<%= error.message %>'
			}))
			.pipe(plugins.autoprefixer({
				cascade: false,
				// grid: 'autoplace',
			}))
			.pipe(plugins.gcmq())
			// .pipe(plugins.mergeMediaQueries({
			// 	log: false
			// }))
			.pipe(plugins.cleanCss({
				compatibility: 'ie11'
			}))
			//.pipe(plugins.sourcemaps.write())
			.pipe(plugins.rename({
				basename: 'styles'
			}))
			/*.pipe(plugins.header(options.banner, {
				package: options.package
			}))*/
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest(options.path.build.html))
	}

};
