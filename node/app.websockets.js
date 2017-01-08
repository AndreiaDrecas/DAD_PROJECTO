"use strict";
var io = require('socket.io');
var tabuleiro_1 = require("./gameEngine/tabuleiro");
var WebSocketServer = (function () {
    function WebSocketServer() {
        var _this = this;
        this.board = [];
        this.gamePlayers = [];
        this.init = function (server) {
            _this.initBoard();
            _this.io = io.listen(server);
            _this.gamePlayers;
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
                //init board
                client.on('board', function (msgData) {
                    this.join(msgData.id);
                    //this.gamePlayers.push({idGame: msgData.id, players: {player: msgData.name}});
                    var tabuleiro = new tabuleiro_1.Tabuleiro();
                    tabuleiro.idPlayer = msgData.idPlayer;
                    this.emit('board', tabuleiro);
                });
                //recieve and send tabuleiro
                client.on('tabuleiro', function (msgData) {
                    this.join(msgData.id);
                    this.emit('tabuleiro', msgData.tabuleiro);
                    this.to(msgData.id).emit('tabuleiro', msgData.tabuleiro);
                });
                client.on('clickElement', function (msgData) {
                    this.join(msgData.id);
                    this.emit('clickElement', msgData.tabuleiro);
                    this.to(msgData.id).emit('clickElement', msgData.tabuleiro);
                });
                client.on('board', function (msgData) {
                    this.join(msgData.id);
                    this.emit('board', msgData.tabuleiro);
                    this.to(msgData.id).emit('board', msgData.tabuleiro);
                });
                //Extra Exercise
            });
        };
        this.notifyAll = function (channel, message) {
            _this.io.sockets.emit(channel, message);
        };
        this.getObjectInArray = function (arr, key) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].hasOwnProperty(key))
                    return arr[i][key];
            }
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
