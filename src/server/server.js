/* jshint esnext: true */
var koa = require('koa');
var serve = require('koa-static');

var server = new koa();

server.use(serve(__dirname + '/public'));

server.listen(8080);
