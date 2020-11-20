
module.exports = function (gulp, options, plugins) {

	//Sprite SVG using background
	
	return function () {

		return gulp.src('./src/assets/sprites/svgBg/**/*.svg')
			.pipe(plugins.plumber())
			.pipe(plugins.svgmin({
				js2svg: {
					pretty: true
				}
			}))
			.pipe(plugins.cheerio({
				run: function($) {
					// $('[fill]').removeAttr('fill');
					// $('[stroke]').removeAttr('stroke');
					// $('[style]').removeAttr('style');
				},
				parserOptions: { xmlMode: true }
			}))
			.pipe(plugins.replace('&gt;', '>'))
			.pipe(plugins.svgSprite({
				shape: {
					spacing: {
						padding: 5
					}
				},
				mode: {
					css: {
						dest: "./",
						layout: "diagonal",
						sprite: './local/templates/html/images/spriteBg.svg',
						bust: false,
						render: {
							scss: {
								dest:"./src/assets/libs/svgBg/_sprite.scss",
								template: "./src/assets/libs/svgBg/sprite-template.scss"
							}
						}
					}
				},
				variables: {
					mapname: "icons"
				}
			}))
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest('./'))
	};
};