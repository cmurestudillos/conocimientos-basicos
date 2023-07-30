// npm i gulp-exec
// npm i gulp-spawn

var gulp = require('gulp');
var childProcess = require('child_process');
var exec = childProcess.exec;
var spawn = childProcess.spawn;

var server;

function createServer() {
  return spawn('node', ['./app/gulpfile.js'], {stdio: "inherit", cwd: process.cwd() });
}

gulp.task('server', function () {
  server = createServer();
});

gulp.task('default', ['server'], function () {
  gulp.watch('app/**/*.js', function () {
    if (server) { server.kill(); }
    server = createServer();
  });
});