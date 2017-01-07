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
                client.emit('players', Date.now() + ': Welcome to battleship');
                client.broadcast.emit('players', Date.now() + ': A new player has arrived');
                client.on('chat', function (data) { return _this.io.emit('chat', data); });
                client.on('chatGame', function (msgData) {
                    this.join(msgData.id);
                    this.emit('chatGame', msgData.name + ': ' + msgData.msg);
                    this.to(msgData.id).emit('chatGame', msgData.name + ': ' + msgData.msg);
                });
                client.on('gameNotification', function (msgData) {
                    var sessionid = client.id;
                    this.join(msgData.id);
                    this.emit('gameNotification', msgData.name + ': Welcome to game Room ' + msgData.id);
                    this.broadcast.to(msgData.id).emit('gameNotification', Date.now() + ': ' + msgData.name + ' has arrived');
                });
                //recieve and send tabuleiro
                client.on('tabuleiro', function (msgData) {
                    this.join(msgData.id);
                    this.emit('chattabuleiroGame', msgData.tabuleiro);
                    this.to(msgData.id).emit('tabuleiro', msgData.tabuleiro);
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
