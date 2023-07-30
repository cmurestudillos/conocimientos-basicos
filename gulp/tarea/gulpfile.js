var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
 
gulp.task('minify', function() {
  console.log('minifying js ...');
 
  return gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify({
      compress: {
        drop_console: true
      }
    }))
    .pipe(gulp.dest('build/js/'));
});
 
gulp.task('watch-js', function() {
  gulp.watch('src/js/*.js', ['minify'], function() {
    console.log('Visualizando los cambios js...');
  });
});
 
gulp.task('default', ['watch-js'], function() {
  console.log('Ejecutando gulp...');
});