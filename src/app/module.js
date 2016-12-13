"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Adrian&Alanna on 12/12/2016.
 */
var core_1 = require("@angular/core");
var app_routing_1 = require("../app.routing");
var sys_admin_component_1 = require("app/sys-admin/sys-admin.component");
var students_component_1 = require("app/StudentsComponent/students.component");
var student_detail_component_1 = require("app/StudentDetailComponent/student-detail.component");
//import { Teachers } from 'app/TeachersComponent/teachers.component';
var dashboard_component_1 = require("app/dashboard/dashboard.component");
var student_dashboard_component_1 = require("app/student-dashboard/student-dashboard.component");
var modules_component_1 = require("app/ModulesComponent/modules.component");
var module_detail_component_1 = require("app/ModuleDetail/module-detail.component");
var modules_performance_component_1 = require("app/ModulesPerformanceComp/modules-performance.component");
var registration_component_1 = require("app/RegistrationComponent/registration.component");
var side_menu_component_1 = require("app/SideMenu/side-menu.component");
var wizard_component_1 = require("app/WizardComponent/wizard.component");
var account_component_1 = require("app/account/account.component");
var school_component_1 = require("app/school/school.component");
var validator_directive_1 = require("app/Validator/validator.directive");
var landing_component_1 = require("app/Landing/landing/landing.component");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        imports: [app_routing_1.ModulaRoutes, common_1.CommonModule, forms_1.FormsModule, forms_2.ReactiveFormsModule],
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
            validator_directive_1.Validator,
            landing_component_1.LandingComponent
        ],
    })
], MainModule);
exports.MainModule = MainModule;
