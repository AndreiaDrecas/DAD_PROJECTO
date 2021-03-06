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
var Top10Component = (function () {
    function Top10Component(router, http) {
        this.router = router;
        this.http = http;
        this.Top10Victories = [];
        this._serverPath = 'http://54.202.237.33:8080/api/v1/';
        this.getTop10();
    }
    Top10Component.prototype.getTop10 = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.get(this._serverPath + 'top10', { headers: headers, withCredentials: false })
            .subscribe(function (response) {
            _this.Top10Victories = response.json();
            //console.log(response.json());
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    return Top10Component;
}());
Top10Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'top10',
        templateUrl: 'top10.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], Top10Component);
exports.Top10Component = Top10Component;
//# sourceMappingURL=top10.component.js.map