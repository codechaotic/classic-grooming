var paths = require('../config/paths');

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var path = require('path');
var Q = require('q');

var src = path.join(paths.client, '**/*.less');
var dest = path.join( paths.build.root, 'public/css');
var file = paths.build.client_style;

var ref = [
  path.join(process.cwd(), 'bower_components/bootstrap/less'),
  path.join(process.cwd(), paths.client)
];

/**
* Concatenate stylesheets into a single file. Return a promise.
*/
var build = function() {
  return Q.Promise(function(resolve,reject) {
    gulp.src(src)
      .pipe(plumber())
      .pipe(less({
        paths: ref
      }))
      .pipe(concat(file))
      .pipe(gulp.dest(dest))
      .on('end', resolve)
      .on('error', reject);
  });
};

/**
* Start watch on angular stylesheets. Return a promise.
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
