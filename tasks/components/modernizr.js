var paths = require('../config/paths');

var gulp = require('gulp');
var modernizr = require('gulp-modernizr');
var plumber = require('gulp-plumber');
var path = require('path');
var Q = require('q');

var src = path.join(paths.client, '**/*.@(js|css)');
var dest = path.join( paths.build.root, 'public/js');

/**
* Copy all vendored scripts in bower dependency order. Return a promise.
*/
var build = function() {
  return Q.Promise(function(resolve,reject) {
    gulp.src(src)
      .pipe(plumber())
      .pipe(modernizr())
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
