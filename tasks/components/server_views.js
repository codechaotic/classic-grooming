var paths = require('../config/paths');

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var path = require('path');
var Q = require('q');

var src = path.join(paths.server, 'views/**/*.html');
var dest = path.join(paths.build.root, 'public');

/**
* Copy all server views. Return a promise.
*/
var build = function() {
  return Q.Promise(function(resolve,reject) {
    gulp.src(src)
      .pipe(plumber())
      .pipe(gulp.dest(dest))
      .on('end', resolve)
      .on('error', reject);
  });
};

/**
* Start watch on server views. Return a promise.
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
