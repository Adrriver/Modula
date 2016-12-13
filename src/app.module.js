"use strict";
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app/ModulaComponent/app.component');
var member_service_service_1 = require('./app/member-service.service');
var session_service_1 = require('./app/SessionService/session.service');
var sys_admin_component_1 = require('./app/sys-admin/sys-admin.component');
var students_component_1 = require('./app/StudentsComponent/students.component');
var student_detail_component_1 = require('./app/StudentDetailComponent/student-detail.component');
var student_service_1 = require('./app/StudentService/student.service');
var dashboard_component_1 = require('./app/dashboard/dashboard.component');
var student_dashboard_component_1 = require('./app/student-dashboard/student-dashboard.component');
var modules_component_1 = require('./app/ModulesComponent/modules.component');
var module_detail_component_1 = require('./app/ModuleDetail/module-detail.component');
var modules_performance_component_1 = require('./app/ModulesPerformanceComp/modules-performance.component');
var module_performance_service_1 = require('./app/ModulePerformanceService/module-performance.service');
var registration_component_1 = require('./app/RegistrationComponent/registration.component');
var side_menu_component_1 = require('./app/SideMenu/side-menu.component');
var http_1 = require('@angular/http');
var wizard_component_1 = require('./app/WizardComponent/wizard.component');
var main_routing_1 = require('./app/main.routing');
//import {ROUTES} from '@angular/router/components/router_config_loader';
var loggedin_guard_1 = require('./app/loggedin.guard');
var account_component_1 = require('./app/account/account.component');
var school_component_1 = require('./app/school/school.component');
var validator_directive_1 = require('./app/Validator/validator.directive');
var landing_component_1 = require('./app/Landing/landing/landing.component');
var common_1 = require('@angular/common');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                main_routing_1.RoutingModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                landing_component_1.LandingComponent,
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
                school_component_1.SchoolComponent
            ],
            entryComponents: [app_component_1.AppComponent],
            providers: [
                student_service_1.StudentService,
                member_service_service_1.MemberService,
                module_performance_service_1.ModulePerformanceService,
                session_service_1.SessionService,
                validator_directive_1.Validator,
                loggedin_guard_1.LoggedGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map