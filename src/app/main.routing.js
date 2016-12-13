//<reference path="./src/app/StudentDetailComponent/student-detail.component.ts"/>
/* components-components.main.module.ts */
"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var students_component_1 = require('./StudentsComponent/students.component');
var student_detail_component_1 = require('./StudentDetailComponent/student-detail.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var student_dashboard_component_1 = require('./student-dashboard/student-dashboard.component');
//import { Teachers } from './TeachersComponent/teachers.component';
//import { TeacherDetail } from './TeacherDetail/teacher-detail.component';
var modules_component_1 = require('./ModulesComponent/modules.component');
var module_detail_component_1 = require('./ModuleDetail/module-detail.component');
var loggedin_guard_1 = require('./loggedin.guard');
var modules_performance_component_1 = require('./ModulesPerformanceComp/modules-performance.component');
var registration_component_1 = require('./RegistrationComponent/registration.component');
var side_menu_component_1 = require('./SideMenu/side-menu.component');
var wizard_component_1 = require('./WizardComponent/wizard.component');
var sys_admin_component_1 = require('./sys-admin/sys-admin.component');
var account_component_1 = require('./account/account.component');
var landing_component_1 = require('./Landing/landing/landing.component');
var school_component_1 = require('./school/school.component');
var routes = [
    { path: '', pathMatch: 'full', component: landing_component_1.LandingComponent },
    { path: '', canActivate: [loggedin_guard_1.LoggedGuard], children: [
            { path: 'sysadmin', component: sys_admin_component_1.SysAdminComponent },
            { path: 'dashboard', component: dashboard_component_1.Dashboard },
            { path: 'student-dashboard', component: student_dashboard_component_1.StudentDashboardComponent },
            { path: 'account', component: account_component_1.AccountComponent },
            { path: 'registration', component: registration_component_1.RegistrationComponent },
            { path: 'students', component: students_component_1.Students },
            { path: 'detail/:id', component: student_detail_component_1.StudentDetail },
            { path: 'side-menu', component: side_menu_component_1.SideMenu },
            { path: 'modules-performance', component: modules_performance_component_1.ModulesPerformance },
            { path: 'modules', component: modules_component_1.Modules },
            { path: 'modDetail/:modId', component: module_detail_component_1.ModuleDetail },
            { path: 'wizard', component: wizard_component_1.WizardFormCreator },
            { path: 'school', component: school_component_1.SchoolComponent }
        ] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=main.routing.js.map