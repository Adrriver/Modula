"use strict";
//<reference path="./src/app/StudentDetailComponent/student-detail.component.ts"/>
/* components-components.main.module.ts */
var router_1 = require('@angular/router');
var login_routing_1 = require("./app/login.routing");
var main_routing_1 = require('./app/main.routing');
var routes = [
    { path: '', pathMatch: 'full', loadChildren: 'components/main.module#MainModule' }
].concat(login_routing_1.loginRoutes, [
    main_routing_1.routing
]);
exports.routingProviders = [
    login_routing_1.authorizationProviders
];
/*@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})*/
exports.ModulaRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map