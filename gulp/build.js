const { src, dest } = require('gulp');

module.exports = function build() {
    return src([
        'dev/*.html',
        'dev/css/*.min.css',
        'dev/js/*.min.js',
        'dev/img/*'
    ], { base: 'dev'})
    .pipe(dest('build'))
}