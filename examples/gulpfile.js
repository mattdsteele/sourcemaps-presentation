var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourceMaps = require('gulp-sourcemaps');


gulp.task('default', function() {
  var deps = [
    './node_modules/angular/angular.js',
    './node_modules/lodash/index.js'
  ];
  return gulp.src(deps)
    .pipe(sourceMaps.init({ loadMaps: true }))
    .pipe(concat('deps.js'))
    .pipe(uglify())
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('dist'))
});
