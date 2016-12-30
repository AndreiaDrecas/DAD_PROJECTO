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
var session_service_1 = require("./authentication/session.service");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var NavComponent = (function () {
    function NavComponent(router, http, sessionService) {
        this.router = router;
        this.http = http;
        this.sessionService = sessionService;
        this._serverPath = 'http://localhost:8888/api/v1/';
    }
    NavComponent.prototype.refresh = function () {
        this.name = localStorage.getItem('name');
        this.avatar = localStorage.getItem('avatar');
    };
    NavComponent.prototype.userIsIn = function () {
        if (this.sessionService.isLoggedIn()) {
            this.refresh();
            return true;
        }
        return false;
    };
    //Isto ainda não está a funcionar mto bem
    NavComponent.prototype.userIsOut = function () {
        this.sessionService.logout();
        this.logout();
        localStorage.clear();
    };
    NavComponent.prototype.logout = function () {
        var _this = this;
        var authToken = localStorage.getItem('id_token');
        console.log(authToken);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + authToken);
        var body = JSON.stringify({});
        // headers.append('Authorization','Bearer 4a1fc711f2f7756353da87bf11e8d6a4828418a6');
        console.log(headers);
        this.http.post(this._serverPath + 'logout', body, { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            alert("Logout success");
            _this.router.navigate(['login']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'nav-bar',
        templateUrl: 'nav.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, session_service_1.SessionService])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map