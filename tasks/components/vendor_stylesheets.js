var paths = require('../config/paths');

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');
var path = require('path');
var Q = require('q');

var src = mainBowerFiles('**/*.css');
var dest = path.join( paths.build.root, 'public/css');
var file = paths.build.vendor_style;

/**
* Concatenate all vendored stylesheets in bower dependency order. Return a promise.
*/
var build = function() {
  return Q.Promise(function(resolve,reject) {
    gulp.src(src)
      .pipe(plumber())
      .pipe(concat(file))
      .pipe(gulp.dest(dest))
      .on('end', resolve)
      .on('error', reject);
  });
};

/**
* Start watch on vendored stylesheet sources. Return a promise.
*/
var watch = function(onChange) {
  return build()
    .then(function() {
      return Q.Promise(function(resolve,reject) {
        gulp.watch(src)
          .on('change', function(path) {
            build();
            onChange(path);
          })
          .on('error', reject)
          .on('ready', resolve);
      });
    });
};

module.exports = {
  build: build,
  watch: watch
}
