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
var Modula_component_1 = require("./app.component.js");
var students_component_1 = require("./students.component.js");
var student_detail_component_1 = require("./student-detail.component.js");
var student_service_1 = require("./student.service.js");
var dashboard_component_1 = require("app/Dashboard/dashboard.component");
var app_routing_module_1 = require("./app-routing.module");
var modules_component_1 = require("app/Modules/modules.component.js");
var module_service_1 = require("app/ModuleService/module.service");
var module_detail_component_1 = require("app/ModuleDetail/module-detail.component.js");
var module_performance_component_1 = require("app/ModulePerformance/module-performance.component.js");
var module_performance_service_1 = require("app/ModulePerformanceService/module-performance.service.js");
var http_1 = require("@angular/http");
var http_1 = require("app/ModulesPerformanceComp/modules-performance.component");
var student_dashboard_1 = require("app/student-dashboard/student-dashboard.component");
//var login_component_1 = require("./login.component");

var wizard_component_1 = require("app/WizardFormCreator/wizard.component.js");
//var HTTP_service_1 = require("./HTTP.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            ModulaComponent,
            student_detail_component_1.StudentDetail,
            modules_component_1.Modules,
            module_detail_component_1.ModuleDetail,
            module_performance_component_1.ModulesPerformance,
            dashboard_component_1.Dashboard,
            students_component_1.Students,
            student_detail_component_1.StudentDetail,
            student_dashboard_1.StudentDashboard,
            wizard_component_1.WizardFormCreator,
        ],
        entryComponents: [Modula_component_1.AppComponent],
        providers: [student_service_1.StudentService,
            ModulaMemberService,
            module_performance_service_1.ModulePerformanceService,
            module_service_1.ModuleService,
            HTTP_service_1.HTTPService,
            LoggedGuard],
        bootstrap: [Modula_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=Modula.module.js.map
