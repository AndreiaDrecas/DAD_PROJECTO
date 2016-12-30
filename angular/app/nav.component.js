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
        this.name = sessionStorage.getItem('name');
        this.avatar = sessionStorage.getItem('avatar');
    };
    NavComponent.prototype.userIsLoggedIn = function () {
        if (this.sessionService.isLoggedIn()) {
            this.refresh();
            return true;
        }
        return false;
    };
    NavComponent.prototype.logout = function () {
        this.sessionService.logout();
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