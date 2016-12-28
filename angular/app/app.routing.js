"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var top10_component_1 = require("./top10.component");
var gameHistory_component_1 = require("./gameHistory.component");
var login_component_1 = require("./authentication/login.component");
var register_component_1 = require("./authentication/register.component");
var lobby_component_1 = require("./game/lobby.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'lobby', component: lobby_component_1.LobbyComponent },
    { path: 'top10', component: top10_component_1.Top10Component },
    { path: 'gameHistory', component: gameHistory_component_1.GameHistoryComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map