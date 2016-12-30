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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var RegisterComponent = (function () {
    function RegisterComponent(router, http) {
        this.router = router;
        this.http = http;
        this._serverPath = 'http://localhost:8888/api/v1/players';
    }
    RegisterComponent.prototype.validate = function () {
        //Isto é só para teste, depois é preciso fazer mesmo a validação e mostrar mensagem de erro
        this.validated = true;
    };
    RegisterComponent.prototype.register = function (name, username, passwordHash, email) {
        var _this = this;
        var avatar = "";
        var totalVictories = 0;
        var body = JSON.stringify({ name: name, username: username, passwordHash: passwordHash, email: email, avatar: avatar, totalVictories: totalVictories });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(body);
        this.http.post(this._serverPath, body, { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            alert("Registation success");
            _this.router.navigate(['login']);
        }, function (error) {
            0;
            alert(error.text());
            console.log(error.text());
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map