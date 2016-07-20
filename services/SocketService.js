'use strict';

let indexSocketController  = require('../controllers/index.socket.js')

let socketIO
function SocketServer(io){
    socketIO = io
    console.log('Socket IO started')
    socketIO.on('connection', onClientConnected)
}

function onClientConnected(client){
    console.log('Client Connected')

    client.on('CLIENT_HELLO', indexSocketController.indexAction)
    client.emit('SERVER_HELLO')
}

module.exports = SocketServer
