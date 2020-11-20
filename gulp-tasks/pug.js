'use strict';

module.exports = function (gulp, options, plugins) {

	return function (cb) {

		new Promise(function (resolve, reject) {
			plugins.emitty.scan(global.emittyChangedFile).then(function () {
				gulp.src(options.path.src.pug, {read: true})
					.pipe(plugins.plumber())
					.pipe(plugins.if(global.watch, plugins.emitty.filter(global.emittyChangedFile)))
					.pipe(plugins.pug({
						pretty: true,
						plugins: [plugins.pugIncludeGlob()],
					}))
					.on('error', plugins.notify.onError({
						title: 'PUG error',
						message: '<%= error.message %>'
					}))
					.pipe(plugins.debug({title: "Emitty: "}))
					.pipe(plugins.inlinesource())
					.pipe(plugins.cheerio({
							run: function($, file, done) {
								var $head = $('head');
								var $style_components = $('.js-style-components');
								var $style_components_html = $('.js-style-components').html();

								$head.append($style_components_html);
								$style_components.remove();

								done();
							},
							parserOptions: {
								decodeEntities: false
							},
						}),
					)
					.pipe(plugins.plumber.stop())
					.pipe(gulp.dest(options.path.build.html))
					.on('end', resolve)
					.on('error', reject);
			});
		});

		cb();
	};
};
