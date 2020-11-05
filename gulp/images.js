const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');  

module.exports = function images() {
    return src('src/img/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3
    }))
    .pipe(dest('dev/img'))
}