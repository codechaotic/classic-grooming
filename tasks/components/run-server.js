var settings = require('../config/nodemon.json');

var nodemon = require('nodemon');
var gutil = require('gulp-util');
var path = require('path');

module.exports = {
  start: function() {
    console.log(gutil.colors.yellow('\nServer Start\n'))
    return nodemon(settings)
      .on('restart', function() {
        console.log(gutil.colors.yellow('\nServer Restart\n'))
      })
  },
  restart: nodemon.restart
};
