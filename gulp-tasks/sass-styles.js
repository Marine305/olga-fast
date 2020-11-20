module.exports = function (gulp, options, plugins) {

	if (!plugins.fs.existsSync(__dirname + '/../local/templates/html/css/styles.min.css')) {
		plugins.fs.mkdir(__dirname + '/../local/', function(){
			plugins.fs.mkdir(__dirname + '/../local/templates/', function(){
				plugins.fs.mkdir(__dirname + '/../local/templates/html/', function(){
					plugins.fs.mkdir(__dirname + '/../local/templates/html/css/', function(){
						plugins.fs.writeFileSync(__dirname + '/../local/templates/html/css/styles.min.css', '');
					});
				});
			});
		});
	}

	return function (cb) {

		gulp.src([options.path.src.styles + 'styles.{scss,sass}'])
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
				basename: 'styles',
				suffix: '.min'
			}))
			/*.pipe(plugins.header(options.banner, {
			 package: options.package
			 }))*/
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest(options.path.build.css))

		cb();
	}

};
