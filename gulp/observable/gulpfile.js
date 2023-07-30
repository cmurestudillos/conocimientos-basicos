var gulp = require('gulp');
 
gulp.task('ver', function () {
    gulp.watch('estilos.css', ['css']);
});