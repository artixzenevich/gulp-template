const { src, dest } = require('gulp');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const sourcemap = require('gulp-sourcemaps');
const rename = require('gulp-rename');

module.exports = function styles() {
    return src('src/scss/*.scss')
    .pipe(sourcemap.init())
    .pipe(scss())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleancss())
    .pipe(sourcemap.write())
    .pipe(rename({ suffix: '.min'}))
    .pipe(dest('dev/css'))
}