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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var websocket_service_1 = require("../notifications/websocket.service");
var gamesPendingComponent = (function () {
    function gamesPendingComponent(router, http, websocketService) {
        this.router = router;
        this.http = http;
        this.websocketService = websocketService;
        this.name = sessionStorage.getItem('name');
        this.totalVictories = sessionStorage.getItem('totalVictories');
        this.username = sessionStorage.getItem('username');
        this.gamesPending = [];
        this._serverPath = 'http://localhost:8888/api/v1/';
        this.getGamesPending();
    }
    //public id_token: any = localStorage.getItem('token');
    gamesPendingComponent.prototype.enterGame = function (id) {
        this.router.navigate(['game', id]);
    };
    gamesPendingComponent.prototype.getGamesPending = function () {
        var _this = this;
        var authToken = sessionStorage.getItem('id_token');
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + authToken);
        this.http.get(this._serverPath + 'games', { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            _this.gamesPending = response.json();
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    return gamesPendingComponent;
}());
gamesPendingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gamesPending',
        templateUrl: 'gamesPending.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, websocket_service_1.WebSocketService])
], gamesPendingComponent);
exports.gamesPendingComponent = gamesPendingComponent;
//# sourceMappingURL=gamesPending.component.js.map