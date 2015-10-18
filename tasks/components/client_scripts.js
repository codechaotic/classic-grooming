var paths = require('../config/paths');

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var path = require('path');
var Q = require('q');

var src = [
  path.join(paths.client, 'modules.js'),
  path.join(paths.client, 'components/**/*.js')
];
var dest = path.join( paths.build.root, 'public/js');
var file = paths.build.client_script;

/**
* Concatenate angular components into a single file with module
* definitions first. Return a promise.
*/
var build = function() {
  return Q.Promise(function(resolve,reject) {
    gulp.src(src)
      .pipe(plumber())
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(concat(file))
      .pipe(gulp.dest(dest))
      .on('end', resolve)
      .on('error', reject);
  });
};

/**
* Start watch on angular client components. Return a promise.
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
