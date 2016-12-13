/**
 * Created by Adrian&Alanna on 12/12/2016.
 */
import { NgModule } from '@angular/core';
import { ModulaRoutes } from '../app.routing';
import { AppComponent } from './ModulaComponent/app.component';
import { MemberService } from './member-service.service';
import { SessionService } from './SessionService/session.service';
import { SysAdminComponent } from './sys-admin/sys-admin.component';
import { Students } from './StudentsComponent/students.component';
import { StudentDetail } from './StudentDetailComponent/student-detail.component';
import { StudentService } from './StudentService/student.service';
//import { Teachers } from 'components/TeachersComponent/teachers.component';
import { Dashboard } from './dashboard/dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { Modules } from './ModulesComponent/modules.component';
import { ModuleDetail } from './ModuleDetail/module-detail.component';
import { ModulesPerformance } from './ModulesPerformanceComp/modules-performance.component';
import { ModulePerformanceService } from './ModulePerformanceService/module-performance.service';
import { RegistrationComponent } from './RegistrationComponent/registration.component';
import { SideMenu } from './SideMenu/side-menu.component';
import { HttpModule } from '@angular/http';
import { WizardFormCreator } from './WizardComponent/wizard.component';
//import {ROUTES} from '@angular/router/components/router_config_loader';
import { LoggedGuard } from './loggedin.guard';
import { AccountComponent } from './account/account.component';
import { Wizard } from './WizardInterface/wizard.interface';
import { Account } from './account/account.interface';
import { SchoolComponent } from './school/school.component';
import { Validator } from './Validator/validator.directive';
import { LandingComponent } from './Landing/landing/landing.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {routing} from "./main.routing";

@NgModule({
  imports: [routing,
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,],
  declarations: [

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
    SchoolComponent,


  ],
  providers: [ StudentService,
    MemberService,
    ModulePerformanceService,
    SessionService,
    Validator],})

export class MainModule {}
