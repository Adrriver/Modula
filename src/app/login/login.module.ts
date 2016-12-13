import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {LandingComponent} from "../Landing/landing/landing.component";
import {SysAdminComponent} from "../sys-admin/sys-admin.component";
import {Modules} from "../ModulesComponent/modules.component";
import {ModuleDetail} from "../ModuleDetail/module-detail.component";
import {ModulesPerformance} from "../ModulesPerformanceComp/modules-performance.component";
import {Dashboard} from "../dashboard/dashboard.component";
import {StudentDashboardComponent} from "../student-dashboard/student-dashboard.component";
import {Students} from "../StudentsComponent/students.component";
import {StudentDetail} from "../StudentDetailComponent/student-detail.component";
import {WizardFormCreator} from "../WizardComponent/wizard.component";
import {AccountComponent} from "../account/account.component";
import {RegistrationComponent} from "../RegistrationComponent/registration.component";
import {SideMenu} from "../SideMenu/side-menu.component";
import {SchoolComponent} from "../school/school.component";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,

  ],
  declarations: [LoginComponent,
    LandingComponent,
    SysAdminComponent,
    Modules,
    ModuleDetail,
    ModulesPerformance,
    Dashboard,
    StudentDashboardComponent,
    Students,
    StudentDetail,
    Dashboard,
    WizardFormCreator,
    AccountComponent,
    RegistrationComponent,
    SideMenu,
    SchoolComponent]
})
export class LoginModule { }
