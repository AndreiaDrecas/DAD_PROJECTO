"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GameChatComponent = (function () {
    function GameChatComponent(router, http, websocketService) {
        this.router = router;
        this.http = http;
        this.websocketService = websocketService;
        this.playersCChannel = [];
        this.chatCChannel = [];
        this.authToken = sessionStorage.getItem('id_token');
        this._serverPath = 'http://54.202.237.33:8888/api/v1/';
    }
    GameChatComponent.prototype.send = function () {
        this.websocketService.sendGameChatMessage({ id: this.idGame, msg: this.message, name: sessionStorage.getItem('name') });
        this.message = '';
    };
    GameChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.websocketService.getGameChatMessages().subscribe(function (m) { return _this.chatCChannel.push(m); });
        this.websocketService.getGamePlayersMessages().subscribe(function (m) { return _this.playersCChannel.push(m); });
        this.websocketService.sendGamePlayersMessage({ id: this.idGame, msg: '', name: sessionStorage.getItem('name') });
    };
    __decorate([
        core_1.Input()
    ], GameChatComponent.prototype, "idGame", void 0);
    GameChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gameChat',
            templateUrl: 'gameChat.component.html'
        })
    ], GameChatComponent);
    return GameChatComponent;
}());
exports.GameChatComponent = GameChatComponent;