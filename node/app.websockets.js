"use strict";
var io = require('socket.io');
var WebSocketServer = (function () {
    function WebSocketServer() {
        var _this = this;
        this.board = [];
        this.init = function (server) {
            _this.initBoard();
            _this.io = io.listen(server);
            _this.io.sockets.on('connection', function (client) {
                var sessionid = client.id;
                client.emit('players', sessionid + ': Welcome to battleship');
                client.broadcast.emit('players', Date.now() + ': A new player has arrived');
                client.emit('playersC', Date.now() + ': Welcome to battleship');
                client.broadcast.emit('playersC', Date.now() + ': A new player has arrived');
                client.on('chat', function (data) { return _this.io.emit('chat', data); });
                client.on('chatC', function (data) { return _this.io.emit('chatC', data); });
                //recieve and send tabuleiro
                client.on('tabuleiro', function (tabuleiro) {
                    console.log(tabuleiro);
                    io.sockets.emit('tabuleiro', tabuleiro);
                });
                //Extra Exercise
                client.emit('board', _this.board);
                client.on('clickElement', function (tabuleiro) {
                    _this.notifyAll('board', tabuleiro);
                });
            });
        };
        this.notifyAll = function (channel, message) {
            _this.io.sockets.emit(channel, message);
        };
    }
    WebSocketServer.prototype.initBoard = function () {
        for (var i = 0; i < 100; i++) {
            this.board[i] = 0;
        }
    };
    return WebSocketServer;
}());
exports.WebSocketServer = WebSocketServer;
;
