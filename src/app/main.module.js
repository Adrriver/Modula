"use strict";
/**
 * Created by Adrian&Alanna on 12/12/2016.
 */
var core_1 = require('@angular/core');
var member_service_service_1 = require('./member-service.service');
var session_service_1 = require('./SessionService/session.service');
var sys_admin_component_1 = require('./sys-admin/sys-admin.component');
var students_component_1 = require('./StudentsComponent/students.component');
var student_detail_component_1 = require('./StudentDetailComponent/student-detail.component');
var student_service_1 = require('./StudentService/student.service');
//import { Teachers } from 'components/TeachersComponent/teachers.component';
var dashboard_component_1 = require('./dashboard/dashboard.component');
var student_dashboard_component_1 = require('./student-dashboard/student-dashboard.component');
var modules_component_1 = require('./ModulesComponent/modules.component');
var module_detail_component_1 = require('./ModuleDetail/module-detail.component');
var modules_performance_component_1 = require('./ModulesPerformanceComp/modules-performance.component');
var module_performance_service_1 = require('./ModulePerformanceService/module-performance.service');
var registration_component_1 = require('./RegistrationComponent/registration.component');
var side_menu_component_1 = require('./SideMenu/side-menu.component');
var http_1 = require('@angular/http');
var wizard_component_1 = require('./WizardComponent/wizard.component');
var account_component_1 = require('./account/account.component');
var school_component_1 = require('./school/school.component');
var validator_directive_1 = require('./Validator/validator.directive');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var forms_2 = require('@angular/forms');
var platform_browser_1 = require("@angular/platform-browser");
var main_routing_1 = require("./main.routing");
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [main_routing_1.routing,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                http_1.HttpModule,
                forms_2.ReactiveFormsModule, platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                http_1.HttpModule,
                forms_2.ReactiveFormsModule,],
            declarations: [
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
            ],
            providers: [student_service_1.StudentService,
                member_service_service_1.MemberService,
                module_performance_service_1.ModulePerformanceService,
                session_service_1.SessionService,
                validator_directive_1.Validator], }), 
        __metadata('design:paramtypes', [])
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map