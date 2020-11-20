module.exports = function (gulp, options, plugins) {

	// Удаляет файлы проекта

	return function (cb) {
		plugins.del(['./local/']);
		plugins.del(['./.gulp/']);

		cb();
	};
};
