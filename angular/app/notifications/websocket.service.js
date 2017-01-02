"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var io = require("socket.io-client");
var WebSocketService = (function () {
    function WebSocketService() {
        if (!this.socket) {
            this.socket = io("http://localhost:8888");
        }
    }
    WebSocketService.prototype.sendChatMessage = function (message) {
        this.socket.emit('chat', sessionStorage.getItem('name') + ': ' + message);
    };
    WebSocketService.prototype.sendGameChatMessage = function (message) {
        this.socket.emit('chatC', sessionStorage.getItem('name') + ': ' + message);
    };
    WebSocketService.prototype.sendTable = function (tabuleiro) {
        console.log('cheguei ao websocket client');
        console.log('Numero de tiros: ' + tabuleiro.nTiros);
        this.socket.emit('tabuleiro', tabuleiro);
    }; //array de tabuleiros, nome e ID do user
    WebSocketService.prototype.getTable = function () {
        return this.listenOnChannel('tabuleiro');
    };
    WebSocketService.prototype.getPlayersMessages = function () {
        return this.listenOnChannel('players');
    };
    WebSocketService.prototype.getGameChatMessages = function () {
        return this.listenOnChannel('chatC');
    };
    WebSocketService.prototype.getGamePlayersMessages = function () {
        return this.listenOnChannel('playersC');
    };
    WebSocketService.prototype.getChatMessages = function () {
        return this.listenOnChannel('chat');
    };
    // Extra Exercise
    WebSocketService.prototype.sendClickElementMessage = function (tabuleiro) {
        this.socket.emit('clickElement', tabuleiro);
    };
    WebSocketService.prototype.getBoardMessages = function () {
        return this.listenOnChannel('board');
    };
    WebSocketService.prototype.listenOnChannel = function (channel) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on(channel, function (data) {
                observer.next(data);
            });
            return function () { return _this.socket.disconnect(); };
        });
    };
    return WebSocketService;
}());
WebSocketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], WebSocketService);
exports.WebSocketService = WebSocketService;
//# sourceMappingURL=websocket.service.js.map