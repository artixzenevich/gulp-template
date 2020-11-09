const { parallel, series } = require('gulp');
const server = require('./gulp/server');
const styles = require('./gulp/styles');
const scripts = require('./gulp/scripts');
const images = require('./gulp/images');
const build = require('./gulp/build');
const del = require('del');

// Удаление папки build перед новой сборкой
function cleanbuild() {
    return del('build', { force: true})
}

// Запуск режима разработки
exports.dev = parallel(server, styles, scripts);
// Обработка изображений
exports.optimaze = series(images);
// Запуск сборки проекта
exports.build = series(cleanbuild, build);

