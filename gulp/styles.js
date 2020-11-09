const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const sourcemap = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');

module.exports = function styles() {
    return src('src/sass/*.sass')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleancss())
    .pipe(sourcemap.write())
    .pipe(rename({ suffix: '.min'}))
    .pipe(dest('dev/css'))
}