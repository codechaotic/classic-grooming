var paths = require('../config/paths');

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var mainBowerFiles = require('main-bower-files');
var path = require('path');
var Q = require('q');

var src = mainBowerFiles('**/*.@(eot|svg|ttf|woff|woff2)');
var dest = path.join( paths.build.root, 'public/fonts');

/**
* Copy all vendored fonts. Return a promise.
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
* Start watch on vendored font sources. Return a promise.
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
