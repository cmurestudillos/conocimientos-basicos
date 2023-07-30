//npm i gulp-minify

var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('move', function() {
    gulp.src('src/css/estilos.css')
    .pipe(minify())
    .pipe(gulp.dest('css/'));
});