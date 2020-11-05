const { watch, series } = require('gulp');
const server = require('browser-sync').create();
const style = require('./styles');
const script = require('./scripts');


function reloaded(cb) {
    server.reload()
    cb()
}

module.exports = function serve() {
    server.init({
        server: 'dev'
    });

    watch('src/scss/*.scss', series(style, reloaded));
    watch('src/scripts/*.js', series(script, reloaded));
    watch('dev/*.html').on('change', server.reload);
}