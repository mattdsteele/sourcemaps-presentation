var gulp = require('gulp'),
  concat = require('gulp-concat'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  postCss = require('gulp-postcss'),
  ngAnnotate = require('gulp-ng-annotate')
  es = require('event-stream'),
  csswring = require('csswring'),
  connect = require('gulp-connect'),
  sourceMaps = require('gulp-sourcemaps');

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 4000
  });
});

gulp.task('js', function() {

  //ES6
  var es6Stream = gulp.src(['src/es6/*.es6'])
    .pipe(sourceMaps.init({ loadMaps: true}))
    .pipe(babel());

  //JS
  var deps = [
    './node_modules/angular/angular.js',
    './node_modules/lodash/index.js'
  ];
  var jsFiles = deps.concat(['./src/js/*.js']);
  var jsStream = gulp.src(jsFiles)
    .pipe(sourceMaps.init({ loadMaps: true }));

  //TypeScript

  //CoffeeScript

  //ArnoldC

  //Now smoosh them together
  return es.merge(es6Stream, jsStream)
    .pipe(ngAnnotate())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  //Sass

  //CSS
  //Then smoosh them together
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'src/css/*'
  ])
  .pipe(sourceMaps.init({ loadMaps: true }))
  .pipe(concat('app.css'))
  .pipe(postCss([ csswring ]))
  .pipe(sourceMaps.write('.'))
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*'], ['js']);
  gulp.watch(['src/sass/*', 'src/css/*'], ['css']);
});

gulp.task('default', ['js', 'css', 'connect', 'watch']);
