module.exports = function (gulp, options, plugins) {

	// Хостит файлы
	// TODO:  доделать таск. пока не работает

	return function (cb) {
		
		const conn = plugins.ftp.create({
			host:     '188.225.35.228',
			user:     'bitrix',
			password: 'wgr9TsNR',
			parallel: 10,
			log:      gutil.log
		});
	 
		const globs = [
			'local/**'
		];

		gulp.src( globs, { base: '.', buffer: false } )
			.pipe( conn.newer( '/local' ) ) // only upload newer files
			.pipe( conn.dest( '/home/bitrix/ext_www/html-slam.ru/test123' ) );
		
		cb();
	};
};
