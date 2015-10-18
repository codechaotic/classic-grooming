var paths = require('../config/paths');

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');
var path = require('path');
var Q = require('q');

var src = mainBowerFiles('**/*.js');
var dest = path.join( paths.build.root, 'public/js');
var file = paths.build.vendor_script;

/**
* Copy all vendored scripts in bower dependency order. Return a promise.
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
* Start watch on vendored javascript sources. Return a promise.
*/
var watch = function(onChange) {
  return build()
    .then(function() {
      return Q.Promise(function(resolve,reject) {
        gulp.watch(src)
          .on('change', onChange)
          .on('error', reject)
          .on('ready', resolve);
      });
    });
};

module.exports = {
  build: build,
  watch: watch
}
