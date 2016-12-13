"use strict";
var loggedin_guard_1 = require('./loggedin.guard');
var session_service_1 = require('./SessionService/session.service');
var landing_component_1 = require("./Landing/landing/landing.component");
exports.loginRoutes = [
    { path: 'login', component: landing_component_1.LandingComponent }
];
exports.authorizationProviders = [
    loggedin_guard_1.LoggedGuard,
    session_service_1.SessionService
];
//# sourceMappingURL=login.routing.js.map