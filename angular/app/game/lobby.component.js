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
var LobbyComponent = (function () {
    function LobbyComponent() {
        //public id_token: any = localStorage.getItem('token');
        this.name = localStorage.getItem('name');
        this.totalVictories = localStorage.getItem('totalVictories');
        this.username = localStorage.getItem('username');
    }
    return LobbyComponent;
}());
LobbyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lobby',
        templateUrl: 'lobby.component.html'
    }),
    __metadata("design:paramtypes", [])
], LobbyComponent);
exports.LobbyComponent = LobbyComponent;
//# sourceMappingURL=lobby.component.js.map