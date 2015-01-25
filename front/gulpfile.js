var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var reactify = require('reactify');
var clean = require('gulp-clean');
var importCss = require('gulp-import-css');
var pkg = require('./package.json');
var webserver = require('gulp-webserver');

gulp.task('browserify', function () {
  return gulp.src(pkg.paths.app)
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat(pkg.dest.app))
    .pipe(gulp.dest(pkg.dest.dist));
});

gulp.task('copy', function () {
  gulp.src('bower_components/ionicons/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));

  gulp.src('img/**/*.*')
    .pipe(gulp.dest('dist/img'));

  return gulp.src(pkg.paths.index)
    .pipe(gulp.dest(pkg.dest.dist));
});

gulp.task('webserver', function() {
  return gulp.src('./dist')
    .pipe(webserver({
      livereload: true,
      port: 8080,
      fallback: 'index.html'
    }));
});

gulp.task('css', function() {
  return gulp.src(pkg.paths.sass)
    .pipe(sass())
    .pipe(importCss())
    .pipe(concat(pkg.dest.css))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(pkg.dest.dist));
});

gulp.task('clean', function() {
  return gulp.src(pkg.dest.dist, {read: false})
      .pipe(clean());
});

gulp.task('default', ['browserify', 'css', 'copy']);

gulp.task('watch', ['default', 'webserver'], function () {
  gulp.watch([pkg.paths.js, pkg.paths.sass, pkg.paths.index], ['default']);
});