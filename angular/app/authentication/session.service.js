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
var SessionService = (function () {
    function SessionService(router, http) {
        this.router = router;
        this.http = http;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('id_token');
        this._serverPathLogin = 'http://localhost:8888/api/v1/login';
        this._serverPathLogout = 'http://localhost:8888/api/v1/';
    }
    SessionService.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        var body = JSON.stringify({ username: username, password: password });
        var name = JSON.stringify({ password: password });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http
            .post(this._serverPathLogin, body, { headers: headers })
            .subscribe(function (response) {
            if (response.ok) {
                console.log(response.json());
                localStorage.setItem('id_token', response.json().token);
                _this.loggedIn = true;
                localStorage.setItem('name', response.json().name);
                localStorage.setItem('totalVictories', response.json().totalVictories);
                localStorage.setItem('username', response.json().username);
                console.log(response.json().token);
                _this.router.navigate(['lobby']);
            }
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    SessionService.prototype.logout = function () {
        var _this = this;
        var authToken = localStorage.getItem('id_token');
        console.log(authToken);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + authToken);
        var body = JSON.stringify({});
        // headers.append('Authorization','Bearer 4a1fc711f2f7756353da87bf11e8d6a4828418a6');
        console.log(headers);
        this.http
            .post(this._serverPathLogout + 'logout', body, { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            if (response.ok) {
                alert("Logout success");
                localStorage.removeItem('id_token');
                _this.loggedIn = false;
                _this.router.navigate(['login']);
            }
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return SessionService;
}());
SessionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map