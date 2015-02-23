var gulp = require('gulp'),
  concat = require('gulp-concat'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  es = require('event-stream'),
  connect = require('gulp-connect'),
  sourceMaps = require('gulp-sourcemaps');

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 4000
  });
});

gulp.task('js', function() {
  var deps = [
    './node_modules/angular/angular.js',
    './node_modules/lodash/index.js'
  ];
  //ES6
  var es6Stream = gulp.src(['src/es6/*.es6'])
    .pipe(sourceMaps.init({ loadMaps: true}))
    .pipe(babel());

  var jsFiles = deps.concat(['./src/*.js']);
  var jsStream = gulp.src(jsFiles)
    .pipe(sourceMaps.init({ loadMaps: true }));

  return es.merge(es6Stream, jsStream)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*'], ['js']);
});

gulp.task('default', ['js', 'connect', 'watch']);
