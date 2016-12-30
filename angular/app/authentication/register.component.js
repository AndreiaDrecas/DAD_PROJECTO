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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var validator_service_1 = require('../validator.service');
var RegisterComponent = (function () {
    function RegisterComponent(router, http, validator) {
        this.router = router;
        this.http = http;
        this.validator = validator;
        this._serverPath = 'http://localhost:8888/api/v1/players';
        /*this.errorMessagePasswordLength = null;
        this.errorMessagePasswordConfirmation = null;
        this.errorMessageValidName = null;*/
    }
    RegisterComponent.prototype.validate = function (name, username, password, passwordConfirmation, email) {
        //password >= 3
        //nome de utilizador = nome único
        //mail válido
        /*this.errorMessagePasswordLength = null;
        this.errorMessagePasswordConfirmation = null;
        this.errorMessageValidName = null;

        if (!this.validator.passwordLength(password)) {
            this.errorMessagePasswordLength = "Password has few than 3 digits!";

            return false;
        }

        if (!this.validator.matchingPasswords(password, passwordConfirmation)) {
            this.errorMessagePasswordConfirmation = "Password and Password Confirmation are different!";

            return false;
        }

        if (!this.validator.emailValidator) {
            //this.errorMessage = "Email have wrong format!";

            return false;
        }

        return true;*/
    };
    RegisterComponent.prototype.register = function (name, username, passwordHash, passwordConfirmation, email) {
        var _this = this;
        var avatar = "";
        var totalVictories = 0;
        //if (this.validate(name, username, passwordHash, passwordConfirmation, email)) {
        var body = JSON.stringify({ name: name, username: username, passwordHash: passwordHash, email: email, avatar: avatar, totalVictories: totalVictories });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(body);
        this.http
            .post(this._serverPath, body, { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            alert("Registation success");
            _this.router.navigate(['login']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
        //}
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, validator_service_1.ValidatorService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map