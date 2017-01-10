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
var session_service_1 = require("./authentication/session.service");
var GameHistoryComponent = (function () {
    function GameHistoryComponent(session, router, http) {
        this.session = session;
        this.router = router;
        this.http = http;
        this.history = [];
        this.userHistory = [];
        this.userId = sessionStorage.getItem('_id');
        this._serverPath = 'http://54.202.237.33:8080/api/v1/';
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
    return GameHistoryComponent;
}());
GameHistoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gameHistory',
        templateUrl: 'gameHistory.component.html'
    }),
    __metadata("design:paramtypes", [session_service_1.SessionService, router_1.Router, http_1.Http])
], GameHistoryComponent);
exports.GameHistoryComponent = GameHistoryComponent;
//# sourceMappingURL=gameHistory.component.js.map