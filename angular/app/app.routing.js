"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var login_component_1 = require("./authentication/login.component");
var register_component_1 = require("./authentication/register.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map