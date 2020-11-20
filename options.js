module.exports = {
	path: {
		build: {
			html: './local/templates/html/',
			js: './local/templates/html/js/',
			css: './local/templates/html/css/',
			components: './local/templates/html/components-template/',
			images: './local/templates/html/images/',
			imagesPlaceholder: './local/templates/html/images/placeholder',
			fonts: './local/templates/html/fonts/',
			video: './local/templates/html/video/'
		},
		src: {
			pug: './src/pages/**/*.pug',
			styles: [
				'./src/assets/css/'
			],
			js: './src/assets/js/',
			svg: './src/**/*.svg',
			images: './src/**/*.{png,jpg,jpeg,gif,svg,webp}',
			assets: './src/assets/',
			fonts: './src/assets/fonts/**/*',
			sprites: './src/assets/sprites/',
			components_ajax: './src/components/**/ajax__*.pug',
		},
		watch: {
			pug: './src/**/*.pug',
			pug_ajax: './src/components/**/ajax__*.pug',
			sass: './src/**/*.{scss,sass}',
			js: './src/**/*.js',
			svg: './src/**/*.svg',
			images: './src/**/*.{png,jpg,jpeg,gif,ico,svg,webp}'
		}
	},

	serverConfig: {
		server: {
			baseDir: './'
		},
		startPath: "/local/templates/html/index.html",
		host: 'localhost',
		ui: {
			port: 8085
		},
		reloadDelay: 100,
		timestamps: false,
		notify: false,
		// logPrefix: 'frontend'
		// tunnel: true,
		// tunnel: "slamlight"
	},
};
