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
var websocket_service_1 = require("../notifications/websocket.service");
var GameChatComponent = (function () {
    function GameChatComponent(websocketService) {
        this.websocketService = websocketService;
        this.playersCChannel = [];
        this.chatCChannel = [];
        this.contador = 0;
        this.contador += 1;
        this.channel = 'channel' + this.contador;
        this.players = 'player' + this.contador;
    }
    GameChatComponent.prototype.send = function () {
        this.websocketService.sendGameChatMessage(this.message);
        //método experimental chat room 
        // a ideia é formar um channel só relativo a cada game, pensei usar um contador mais as palavras
        //channel e player, mas o ideal seria com o id em vez do contador
        //como fazemos para usar o id do game em vez do contador? do lado da API vai dar jeito.
        //criamos um serviço só para guardar o id e mandar para aqui? Parece-me bué estranho mas não
        //me lembro de fazer isto de outra maneira.
        this.websocketService.sendGCMessage(this.message, this.channel);
        this.message = '';
    };
    GameChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.websocketService.getGameChatMessages().subscribe(function (m) { return _this.chatCChannel.push(m); });
        this.websocketService.getGamePlayersMessages().subscribe(function (m) { return _this.playersCChannel.push(m); });
        //métodos experimentais chat room
        this.websocketService.getGCMessages(this.channel).subscribe(function (m) { return _this.chatCChannel.push(m); });
        this.websocketService.getGPMessages(this.players).subscribe(function (m) { return _this.chatCChannel.push(m); });
    };
    return GameChatComponent;
}());
GameChatComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gameChat',
        templateUrl: 'gameChat.component.html'
    }),
    __metadata("design:paramtypes", [websocket_service_1.WebSocketService])
], GameChatComponent);
exports.GameChatComponent = GameChatComponent;
//# sourceMappingURL=gameChat.component.js.map