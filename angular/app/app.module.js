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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./home.component");
//authentication imports
var login_component_1 = require("./authentication/login.component");
var register_component_1 = require("./authentication/register.component");
var lobby_component_1 = require("./game/lobby.component");
var notifications_module_1 = require("./notifications/notifications.module");
var chat_component_1 = require("./chat.component");
var board_component_1 = require("./game/board.component");
var game_component_1 = require("./game/game.component");
var ship_component_1 = require("./game/ship.component");
var websocket_service_1 = require("./notifications/websocket.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, notifications_module_1.NotificationModule, forms_1.FormsModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, chat_component_1.ChatComponent, board_component_1.BoardComponent, ship_component_1.ShipComponent,
            game_component_1.GameComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, home_component_1.HomeComponent, lobby_component_1.LobbyComponent],
        providers: [websocket_service_1.WebSocketService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map