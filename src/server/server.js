/* jshint esnext: true */
var koa = require('koa');
var send = require('koa-send');

var server = new koa();

server.use(function*() {
  yield send(this, this.path, { root: __dirname + '/assets/index.html' });
});

server.listen(8080);
