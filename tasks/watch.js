var clientStylesheets = require('./components/client_stylesheets');
var clientTemplates = require('./components/client_templates');
var clientScripts = require('./components/client_scripts');
var vendorStylesheets = require('./components/vendor_stylesheets');
var vendorScripts = require('./components/vendor_scripts');
var vendorFonts = require('./components/vendor_fonts');
var serverViews = require('./components/server_views');
var serverScripts = require('./components/server_scripts');
var runServer = require('./components/run-server');
var modernizr = require('./components/modernizr');

var Q = require('q');
var path = require('path');
var gutil = require('gulp-util');

var log = function(msg, event) {
  gutil.log('-', gutil.colors.green(msg), path.basename(event.path));
}
/**
* task: watch
* Watches all assets and rebuilds on change
*/
module.exports = function() {
  return Q.all([
    clientStylesheets.watch(function(event) {
      log('stylesheet changed:', event);
    }),
    clientTemplates.watch(function(event) {
      log('template changed:', event);
    }),
    clientScripts.watch(function(event) {
      log('client changed:', event);
    }),
    vendorStylesheets.watch(function(event) {
      log('stylesheet changed:', event);
    }),
    vendorScripts.watch(function(event) {
      log('library changed:', event);
    }),
    vendorFonts.watch(function(event) {
      log('font changed:', event);
    }),
    serverViews.watch(function(event) {
      log('view changed:', event);
    }),
    serverScripts.watch(function(event) {
      log('server changed:', event);
      runServer.restart();
    }),
    modernizr.watch(function(event) {
      log('modernizr changed:', event);
    })
  ]).then(function() {
    runServer.start();
    return Q.Promise(function(resolve,reject) {
      //never resolves, keeping the task open
    })
  })
};
