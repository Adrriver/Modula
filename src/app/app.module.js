"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("components/ModulaComponent/components.component");
var member_service_service_1 = require("app/member-service.service");
var session_service_1 = require("app/SessionService/session.service");
var sys_admin_component_1 = require("app/sys-admin/sys-admin.component");
var students_component_1 = require("app/StudentsComponent/students.component");
var student_detail_component_1 = require("app/StudentDetailComponent/student-detail.component");
var student_service_1 = require("app/StudentService/student.service");
//import { Teachers } from 'app/TeachersComponent/teachers.component';
var dashboard_component_1 = require("app/dashboard/dashboard.component");
var student_dashboard_component_1 = require("app/student-dashboard/student-dashboard.component");
var modules_component_1 = require("app/ModulesComponent/modules.component");
var module_detail_component_1 = require("app/ModuleDetail/module-detail.component");
var modules_performance_component_1 = require("app/ModulesPerformanceComp/modules-performance.component");
var module_performance_service_1 = require("app/ModulePerformanceService/module-performance.service");
var registration_component_1 = require("app/RegistrationComponent/registration.component");
var side_menu_component_1 = require("app/SideMenu/side-menu.component");
var http_1 = require("@angular/http");
var wizard_component_1 = require("app/WizardComponent/wizard.component");
var app_routing_module_1 = require("components/components.routing.module");
//import {ROUTES} from '@angular/router/app/router_config_loader';
var loggedin_guard_1 = require("app/loggedin.guard");
var account_component_1 = require("app/account/account.component");
var school_component_1 = require("app/school/school.component");
var validator_directive_1 = require("app/Validator/validator.directive");
var landing_component_1 = require("app/Landing/landing/landing.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            app_routing_module_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            sys_admin_component_1.SysAdminComponent,
            modules_component_1.Modules,
            module_detail_component_1.ModuleDetail,
            modules_performance_component_1.ModulesPerformance,
            dashboard_component_1.Dashboard,
            student_dashboard_component_1.StudentDashboardComponent,
            students_component_1.Students,
            student_detail_component_1.StudentDetail,
            dashboard_component_1.Dashboard,
            wizard_component_1.WizardFormCreator,
            account_component_1.AccountComponent,
            registration_component_1.RegistrationComponent,
            side_menu_component_1.SideMenu,
            school_component_1.SchoolComponent,
            validator_directive_1.Validator,
            landing_component_1.LandingComponent //yet to be started
        ],
        // entryComponents: [AppComponent],
        providers: [student_service_1.StudentService,
            member_service_service_1.MemberService,
            module_performance_service_1.ModulePerformanceService,
            session_service_1.SessionService,
            loggedin_guard_1.LoggedGuard,
            validator_directive_1.Validator],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
