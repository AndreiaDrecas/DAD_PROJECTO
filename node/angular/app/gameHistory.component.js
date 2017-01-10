"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var GameHistoryComponent = (function () {
    function GameHistoryComponent(session, router, http) {
        this.session = session;
        this.router = router;
        this.http = http;
        this.history = [];
        this.userHistory = [];
        this.userId = sessionStorage.getItem('_id');
        this._serverPath = 'http://localhost:8888/api/v1/';
        this.isLoggedIn = this.session.isLoggedIn();
        this.getGameHistory();
    }
    GameHistoryComponent.prototype.getHistoryOfUser = function () {
        for (var _i = 0, _a = this.history; _i < _a.length; _i++) {
            var i = _a[_i];
            for (var _b = 0, _c = i.players; _b < _c.length; _b++) {
                var ps = _c[_b];
                if (ps.player.uid == this.userId) {
                    console.log(ps.player.uid);
                    console.log('Coincide!');
                    this.userHistory.push(i);
                    console.log(i);
                }
            }
        }
    };
    GameHistoryComponent.prototype.getGameHistory = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http
            .get(this._serverPath + 'finishedgames', { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            _this.history = response.json();
            console.log(response.json());
            _this.getHistoryOfUser();
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    GameHistoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gameHistory',
            templateUrl: 'gameHistory.component.html'
        })
    ], GameHistoryComponent);
    return GameHistoryComponent;
}());
exports.GameHistoryComponent = GameHistoryComponent;
