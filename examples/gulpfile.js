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
  coffee = require('gulp-coffee'),
  ts = require('gulp-typescript'),
  sourceMaps = require('gulp-sourcemaps'),
  shell = require('gulp-shell'),
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
  './node_modules/angular/angular.min.js*',
  './node_modules/angular-new-router/dist/router*',
  './node_modules/lodash/index.js'
];

gulp.task('deps', function() {
  return gulp.src(deps)
    .pipe(gulp.dest('dist'));
});
gulp.task('js', ['deps'], function() {
  //JS
  var jsFiles = ['./src/js/*.js'];
  var jsStream = gulp.src(jsFiles)
    .pipe(sourceMaps.init({ loadMaps: true }));

  //Now smoosh them together
  return js(es.merge(jsStream), 'example1.js');
});

gulp.task('js2', ['arnoldc', 'deps'], function() {
  //ES6
  var es6Stream = gulp.src(['src/es6/*.es6'])
    .pipe(sourceMaps.init({ loadMaps: true}))
    .pipe(babel());

  //TypeScript
  var tsStream = gulp.src(['src/ts/*.ts'])
    .pipe(sourceMaps.init({ loadMaps: true}))
    .pipe(ts({
      sortOutput: true,
      sourceRoot: ''
    }));

  //CoffeeScript
  var coffeeStream = gulp.src(['src/coffee/*.coffee'])
    .pipe(sourceMaps.init({ loadMaps: true}))
    .pipe(coffee({ bare: true }));

  //Smoosh
  return js(streamqueue({ objectMode: true }, es6Stream, coffeeStream, tsStream), 'example2.js');
});

gulp.task('js3', ['arnoldc', 'deps'], function() {
  //ES6
  var es6Stream = gulp.src(['src/es6/*.es6'])
    .pipe(sourceMaps.init({ loadMaps: true}))
    .pipe(babel());

  //TypeScript
  var tsStream = gulp.src(['src/ts/*.ts'])
    .pipe(sourceMaps.init({ loadMaps: true}))
    .pipe(ts({
      sortOutput: true,
      sourceRoot: ''
    }));

  //CoffeeScript
  var coffeeStream = gulp.src(['src/coffee/*.coffee'])
    .pipe(sourceMaps.init({ loadMaps: true}))
    .pipe(coffee({ bare: true }));

  //ArnoldC
  var arnoldStream = gulp.src(['src/arnoldc/*.js'])
    .pipe(sourceMaps.init({ loadMaps: true}));

  //Smoosh
  return js(streamqueue({ objectMode: true }, es6Stream, coffeeStream, tsStream, arnoldStream), 'example3.js');
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
  return css(es.merge(sassFiles, cssFiles), 'examples.css');
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*'], ['js', 'js2']);
  gulp.watch(['src/sass/*', 'src/css/*'], ['css']);
});

gulp.task('default', ['js', 'js2', 'js3', 'css', 'connect', 'watch']);
gulp.task('arnoldc', function() {
  return gulp.src('src/arnoldc/*.arnoldc', { read: false })
    .pipe(shell('arnoldc.js <%= file.path %>'));
});
