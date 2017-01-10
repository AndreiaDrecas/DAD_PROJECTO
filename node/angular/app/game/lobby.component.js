"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var LobbyComponent = (function () {
    function LobbyComponent(router, http, websocketService, sessionService) {
        this.router = router;
        this.http = http;
        this.websocketService = websocketService;
        this.sessionService = sessionService;
        this.name = sessionStorage.getItem('name');
        this.totalVictories = sessionStorage.getItem('totalVictories');
        this.username = sessionStorage.getItem('username');
        this.gamesPending = [];
        this._serverPath = 'http://54.202.237.33:8888/api/v1/';
        if (!this.sessionService.isLoggedIn()) {
            this.router.navigate(['login']);
        }
    }
    //public id_token: any = localStorage.getItem('token');
    LobbyComponent.prototype.getGamesPending = function () {
        var _this = this;
        var authToken = sessionStorage.getItem('id_token');
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + authToken);
        this.http.get(this._serverPath + 'games', { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            _this.gamesPending = response.json();
            console.log(response.json());
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    LobbyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lobby',
            templateUrl: 'lobby.component.html'
        })
    ], LobbyComponent);
    return LobbyComponent;
}());
exports.LobbyComponent = LobbyComponent;
