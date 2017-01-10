"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game_1 = require('../gameEngine/game');
var core_1 = require('@angular/core');
var GameComponent = (function () {
    function GameComponent(websocketService, route, router, sessionService) {
        this.websocketService = websocketService;
        this.route = route;
        this.router = router;
        this.sessionService = sessionService;
        this.game = new game_1.Game(this.id);
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
        this.websocketService.getInitBoardMessages().subscribe(function (m) { return _this.game.tabuleiros.push(m); });
        this.websocketService.getInitBoard({ id: this.id, msg: 'Entrei', name: sessionStorage.getItem('name'), idPlayer: sessionStorage.getItem('_id') });
    };
    GameComponent.prototype.sendTable = function () {
        console.log(this.game.tabuleiros);
    };
    GameComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    GameComponent.prototype.getBoard = function () {
    };
    GameComponent.prototype.tiro = function () {
    };
    GameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'game',
            templateUrl: 'game.component.html',
            styleUrls: ['game.component.css']
        })
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
