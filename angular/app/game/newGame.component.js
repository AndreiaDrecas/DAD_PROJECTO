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
var NewGameComponent = (function () {
    function NewGameComponent(router, http, websocketService) {
        this.router = router;
        this.http = http;
        this.websocketService = websocketService;
        this.arrayPlayers = [];
        var id = sessionStorage.getItem('_id');
        this.authToken = sessionStorage.getItem('id_token');
        this.arrayPlayers.push({ player: id, score: 0 });
        this._serverPath = 'http://localhost:8888/api/v1/';
    }
    NewGameComponent.prototype.create = function () {
        var body = JSON.stringify({ players: this.arrayPlayers, state: 'pending' });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + this.authToken);
        console.log(body);
        this.http
            .post(this._serverPath + 'games', body, { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            if (response.ok) {
                console.log(response.json());
            }
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    return NewGameComponent;
}());
NewGameComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'newGame',
        templateUrl: 'newGame.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, websocket_service_1.WebSocketService])
], NewGameComponent);
exports.NewGameComponent = NewGameComponent;
//# sourceMappingURL=newGame.component.js.map