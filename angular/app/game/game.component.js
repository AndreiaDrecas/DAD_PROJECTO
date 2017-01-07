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
var websocket_service_1 = require("../notifications/websocket.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var session_service_1 = require("../authentication/session.service");
var GameComponent = (function () {
    function GameComponent(websocketService, route, router, sessionService) {
        this.websocketService = websocketService;
        this.route = route;
        this.router = router;
        this.sessionService = sessionService;
        if (!this.sessionService.isLoggedIn()) {
            this.router.navigate(['login']);
        }
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get URL parameters
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    GameComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    GameComponent.prototype.getBoard = function () {
    };
    GameComponent.prototype.tiro = function () {
    };
    return GameComponent;
}());
GameComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'game',
        templateUrl: 'game.component.html',
        styleUrls: ['game.component.css']
    }),
    __metadata("design:paramtypes", [websocket_service_1.WebSocketService, router_1.ActivatedRoute,
        router_1.Router, session_service_1.SessionService])
], GameComponent);
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map