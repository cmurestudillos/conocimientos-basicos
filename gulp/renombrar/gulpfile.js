//npm install gulp --save-dev
//Instalamos el plugin npm install --save-dev gulp-rename
// gulp css

var gulp = require('gulp');
var minify = require('gulp-minify');
var rename = require('gulp-rename');

gulp.task('css', function() {
    gulp.src('css/estilos.css')
      .pipe(minify())
      .pipe(rename('css/estilos.min.css'))
      .pipe(gulp.dest('.'));
  });