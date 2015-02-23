var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourceMaps = require('gulp-sourcemaps');


gulp.task('default', function() {
  var deps = [
    './node_modules/angular/angular.js',
    './node_modules/lodash/index.js'
  ];
  var more = deps.concat(['./src/js/*.js']);
  console.log(more);
  return gulp.src(more)
    .pipe(sourceMaps.init({ loadMaps: true }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('dist'))
});
