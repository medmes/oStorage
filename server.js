'use strict';

var app = require('./index');
var http = require('http');
var socketService = require('./services/SocketService')


var server;

/*
 * Create and start HTTP server.
 */

server = http.createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8000;

socketService(io)

server.listen(port);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
