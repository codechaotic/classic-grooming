var clientStylesheets = require('./components/client_stylesheets');
var clientTemplates = require('./components/client_templates');
var clientScripts = require('./components/client_scripts');
var vendorScripts = require('./components/vendor_scripts');
var vendorFonts = require('./components/vendor_fonts');
var serverViews = require('./components/server_views');
var serverScripts = require('./components/server_scripts');
var modernizr = require('./components/modernizr');

var Q = require('q');

/**
* task: build
* Run asset builds in parallel
* Return a promise for their completion
*/
module.exports = function() {
  return Q.all([
    clientStylesheets.build(),
    clientTemplates.build(),
    clientScripts.build(),
    vendorScripts.build(),
    vendorFonts.build(),
    serverViews.build(),
    serverScripts.build(),
    modernizr.build()
  ])
};
