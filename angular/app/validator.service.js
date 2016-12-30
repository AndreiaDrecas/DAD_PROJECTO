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
var ValidatorService = (function () {
    function ValidatorService() {
    }
    ValidatorService.prototype.emailValidator = function (control) {
        var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    };
    ValidatorService.prototype.passwordLength = function (passwordKey) {
        var size = passwordKey.length;
        /*if(size >= 3) {
          return true;
        }*/
    };
    //CONTROL GROUP VALIDATORS
    ValidatorService.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    ValidatorService.prototype.checkNumber = function (control) {
        if (control.value <= 1 || control.value >= 5) {
            return { invalidNumber: true };
        }
    };
    ValidatorService.prototype.compareMinAndMax = function (minPlayers, maxPlayers) {
        return function (group) {
            var minPlayersNumber = group.controls[minPlayers];
            var maxPlayersNumber = group.controls[maxPlayers];
            if (minPlayersNumber.value > maxPlayersNumber.value) {
                return {
                    invalidMinOrMaxPlayers: true
                };
            }
        };
    };
    ValidatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ValidatorService);
    return ValidatorService;
}());
exports.ValidatorService = ValidatorService;
//# sourceMappingURL=validator.service.js.map