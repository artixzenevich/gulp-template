const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const sourcemap = require('gulp-sourcemaps');

module.exports = function scripts() {
    return src('src/scripts/*.js')
    .pipe(sourcemap.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemap.write())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dev/js'))
}