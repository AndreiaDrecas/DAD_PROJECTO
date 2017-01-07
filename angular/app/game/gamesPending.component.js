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
var GamesPendingComponent = (function () {
    function GamesPendingComponent(router, http, websocketService) {
        this.router = router;
        this.http = http;
        this.websocketService = websocketService;
        this.totalVictories = sessionStorage.getItem('totalVictories');
        this.userName = sessionStorage.getItem('username');
        this.gamesPending = [];
        this.authToken = sessionStorage.getItem('id_token');
        this.userID = sessionStorage.getItem('_id');
        this.arrayPlayers = [];
        this._serverPath = 'http://localhost:8888/api/v1/';
        this.getGamesPending();
    }
    GamesPendingComponent.prototype.enterGame = function (id) {
        this.idGame = id;
        this.getGame();
        this.arrayPlayers.push({ player: this.userID, score: 0 });
        this.body = JSON.stringify({ players: this.arrayPlayers, state: 'pending' });
        this.updateGame(this.body, this.idGame);
    };
    GamesPendingComponent.prototype.exitGame = function (id) {
        this.idGame = id;
        this.getGame();
        var playerPosition = this.arrayPlayers.find(function (myObj) { return myObj.player < 0; });
        console.log(playerPosition);
    };
    GamesPendingComponent.prototype.getGame = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + this.authToken);
        this.http.get(this._serverPath + 'games/' + this.idGame, { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            if (response.json().players.length <= 4) {
                _this.arrayPlayers = response.json().players;
                console.log(_this.arrayPlayers);
                _this.arrayPlayers.push({
                    player: _this.userID, name: _this.userName,
                    statusDate: Date.now(), score: 0
                });
                //Mudei o state pq já tem mais do que dois players no jogo!
                _this.body = JSON.stringify({ players: _this.arrayPlayers, state: 'readyToStart' });
                _this.updateGame(_this.body, _this.idGame);
            }
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    GamesPendingComponent.prototype.updateGame = function (body, id) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + this.authToken);
        this.http.put(this._serverPath + 'games/' + id, body, { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            _this.router.navigate(['game', id]);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    GamesPendingComponent.prototype.getGamesPending = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + this.authToken);
        this.http.get(this._serverPath + 'games', { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            _this.gamesPending = response.json();
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    return GamesPendingComponent;
}());
GamesPendingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gamesPending',
        templateUrl: 'gamesPending.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, websocket_service_1.WebSocketService])
], GamesPendingComponent);
exports.GamesPendingComponent = GamesPendingComponent;
//# sourceMappingURL=gamesPending.component.js.map