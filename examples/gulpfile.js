var gulp = require('gulp'),
  concat = require('gulp-concat'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  postCss = require('gulp-postcss'),
  ngAnnotate = require('gulp-ng-annotate')
  es = require('event-stream'),
  csswring = require('csswring'),
  autoprefixer = require('gulp-autoprefixer'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  sourceMaps = require('gulp-sourcemaps'),
  streamqueue = require('streamqueue');

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 4000
  });
});

function js(streams, fileName) {
  return streams
    .pipe(ngAnnotate())
    .pipe(concat(fileName))
    .pipe(uglify())
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
}

function css(streams, fileName) {
  return streams
    .pipe(concat(fileName))
    .pipe(autoprefixer())
    .pipe(postCss([ csswring ]))
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
}

//JS
var deps = [
  './node_modules/angular/angular.js',
  './node_modules/lodash/index.js'
];

gulp.task('js', function() {
  //JS
  var jsFiles = deps.concat(['./src/js/*.js']);
  var jsStream = gulp.src(jsFiles)
    .pipe(sourceMaps.init({ loadMaps: true }));

  //Now smoosh them together
  return js(es.merge(jsStream), 'example1.js');
});

gulp.task('js2', function() {
  //JS
  var jsFiles = deps.concat(['/src/js/*.js']);
  var jsStream = gulp.src(jsFiles)
    .pipe(sourceMaps.init({ loadMaps: true }));
    //
  //ES6
  var es6Stream = gulp.src(['src/es6/*.es6'])
    .pipe(sourceMaps.init({ loadMaps: true}))
    .pipe(babel());

  //TypeScript

  //CoffeeScript

  //ArnoldC
  return js(streamqueue({ objectMode: true }, jsStream, es6Stream), 'example2.js');
  //return js(es.merge(es6Stream, jsStream), 'example2.js');
});

gulp.task('css', function() {
  //Sass
  var sassFiles = gulp.src(['src/sass/*'])
    .pipe(sourceMaps.init({ loadMaps: true}))
    .pipe(sass());

  //CSS
  var cssFiles =  gulp.src([
    'node_modules/normalize.css/normalize.css',
    'src/css/*'
  ]).pipe(sourceMaps.init({ loadMaps: true }));

  //Then smoosh them together
  return css(es.merge(sassFiles, cssFiles), 'example1.css');
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*'], ['js', 'js2']);
  gulp.watch(['src/sass/*', 'src/css/*'], ['css']);
});

gulp.task('default', ['js', 'js2', 'css', 'connect', 'watch']);
