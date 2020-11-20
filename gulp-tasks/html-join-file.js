'use strict';
module.exports = function (gulp, options, plugins) {

	return function (cb) {

		gulp.src([
			options.path.build.html + '/*.html'
		])
			.pipe(plugins.plumber())
			.pipe(plugins.cheerio({
					run: function($, file, done) {

						const TEMPLATE_PATH = file._base;
						const NAME =file.history[0].replace(TEMPLATE_PATH + '/', '').replace('.html', '');


						!plugins.fs.existsSync(TEMPLATE_PATH + '/page') && plugins.fs.mkdirSync(TEMPLATE_PATH + '/page');
						!plugins.fs.existsSync(TEMPLATE_PATH + '/page/' + NAME) && plugins.fs.mkdirSync(TEMPLATE_PATH + '/page/' + NAME);

						plugins.fs.writeFile(TEMPLATE_PATH + '/page/' + NAME + '/style.css', '', function(err) {
							if(err) {
								return console.log(err);
							}
						});
						plugins.fs.writeFile(TEMPLATE_PATH + '/page/'+ NAME + '/script.js', '', function(err) {
							if(err) {
								return console.log(err);
							}
						});
						let css = [];
						let js = [];

						$('link[rel="preload"]').each((i,el) => {

							let _i = i;


							let path = $(el).attr('href').replace('./', '/').replace('./', '/').replace('//', '/');
							let file_path =( TEMPLATE_PATH + '/' + path).replace('//', '/');

							plugins.fs.readFile(file_path, 'utf8', function (err,data) {
								if (err) {
									return console.log(err);
								}

								css[_i] = data;
							});



							$(el).remove();
						});

						setTimeout(function() {

							plugins.fs.appendFile(TEMPLATE_PATH + '/page/' + NAME + '/style.css', css.join(''), function(err) {
								if(err) {
									return console.log(err);
								}

							});
						}, 3000);


						$('script[defer]').each((i,el) => {


							let _i = i;
							let path = $(el).attr('src').replace('./', '/').replace('./', '/').replace('//', '/');
							let file_path =( TEMPLATE_PATH + '/' + path).replace('//', '/');
							plugins.fs.readFile(file_path, 'utf8', function (err,data) {
								if (err) {
									return console.log(err);
								}
								js[_i] = data;
							});



							$(el).remove();
						});



						setTimeout(function() {

							plugins.fs.appendFile(TEMPLATE_PATH + '/page/'+ NAME + '/script.js', js.join(''), function(err) {
								if(err) {
									return console.log(err);
								}
							});
						}, 3000);

						$('body').append(' <script src="./page/'+ NAME +'/script.js" defer="defer"></script>');
						$('head').append(' <link rel="preload" href="./page/'+ NAME +'/style.css" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">');
						done();
					},
					parserOptions: {
						decodeEntities: false
					},
				}),
			)
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest('./local/templates/html/'));
		cb();
	}
};
