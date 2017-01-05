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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var GameHistoryComponent = (function () {
    function GameHistoryComponent(router, http) {
        this.router = router;
        this.http = http;
        this.history = [];
        this._serverPath = 'http://localhost:8888/api/v1/';
        this.getGameHistory();
    }
    GameHistoryComponent.prototype.getGameHistory = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http
            .get(this._serverPath + 'finishedgames', { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            _this.history = response.json();
            console.log(response.json());
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
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], GameHistoryComponent);
    return GameHistoryComponent;
}());
exports.GameHistoryComponent = GameHistoryComponent;
//# sourceMappingURL=gameHistory.component.js.map