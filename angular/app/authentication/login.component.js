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
var LoginComponent = (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
        this._serverPath = 'http://localhost:8888/api/v1/login';
    }
    LoginComponent.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        var body = JSON.stringify({ username: username, password: password });
        var name = JSON.stringify({ password: password });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(this._serverPath, body, { headers: headers })
            .subscribe(function (response) {
            console.log(response.json());
            localStorage.setItem('id_token', response.json().token);
            localStorage.setItem('name', response.json().name);
            localStorage.setItem('totalVictories', response.json().totalVictories);
            localStorage.setItem('username', response.json().username);
            console.log(response.json().token);
            _this.router.navigate(['lobby']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map