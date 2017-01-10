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
var Auth = (function () {
    function Auth() {
        // Configure Auth0
        this.lock = new Auth0Lock('JonRXBZjHppu7nnJ1cu7AtrWOCLQzfVD', 'gabriellf.eu.auth0.com');
    }
    Auth.prototype.login = function () {
        this.lock.show(function (error, profile, id_token) {
            if (error) {
                console.log(error);
            }
            // We get a profile object for the user from Auth0
            localStorage.setItem('profile', JSON.stringify(profile));
            // We also get the user's JWT
            localStorage.setItem('id_token', id_token);
        });
    };
    Auth.prototype.logout = function () {
        // To log out, we just need to remove
        // the user's profile and token
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
    };
    return Auth;
}());
Auth = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Auth);
exports.Auth = Auth;
//# sourceMappingURL=auth.service.js.map