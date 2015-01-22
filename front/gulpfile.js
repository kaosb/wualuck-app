var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var reactify = require('reactify');
var clean = require('gulp-clean');
var pkg = require('./package.json');

gulp.task('browserify', function () {
  return gulp.src(pkg.paths.app)
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat(pkg.dest.app))
    .pipe(gulp.dest(pkg.dest.dist));
});

gulp.task('copy', function () {
  return gulp.src(pkg.paths.index)
    .pipe(gulp.dest(pkg.dest.dist));
});

gulp.task('css', function() {
  return gulp.src(pkg.paths.sass)
    .pipe(sass())
    .pipe(concat(pkg.dest.css))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(pkg.dest.dist));
});

gulp.task('fonts', function() {
    return gulp.src('bower_components/ionicons/fonts/**/*.*')
      .pipe(gulp.dest('dist/fonts'));
});

gulp.task('img', function() {
    return gulp.src('img/**/*.*')
      .pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function() {
  return gulp.src(pkg.dest.dist, {read: false})
      .pipe(clean());
});

gulp.task('default', ['browserify', 'css', 'img', 'fonts', 'copy']);

gulp.task('watch', ['default'], function () {
  gulp.watch([pkg.paths.js, pkg.paths.sass, pkg.paths.index], ['default']);
});