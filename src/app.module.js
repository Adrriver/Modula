"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app/ModulaComponent/app.component');
var main_routing_1 = require('./app/main.routing');
var landing_component_1 = require('./app/Landing/landing/landing.component');
var app_routing_1 = require('./app.routing');
var main_module_1 = require('./app/main.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                main_module_1.MainModule,
                forms_1.FormsModule,
                main_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                landing_component_1.LandingComponent
            ],
            // entryComponents: [AppComponent],
            providers: [
                app_routing_1.routingProviders,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map