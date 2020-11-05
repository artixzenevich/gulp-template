const { parallel, series } = require('gulp');
const server = require('./gulp/server');
const styles = require('./gulp/styles');
const scripts = require('./gulp/scripts');
const images = require('./gulp/images');

// Запуск режима разработки
exports.dev = parallel(server, styles, scripts);
// Обработка изображений
exports.optimaze = series(images);
