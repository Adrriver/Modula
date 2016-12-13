import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/ModulaComponent/app.component';
import { MemberService } from './app/member-service.service';
import { SessionService } from './app/SessionService/session.service';
import { SysAdminComponent } from './app/sys-admin/sys-admin.component';
import { Students } from './app/StudentsComponent/students.component';
import { StudentDetail } from './app/StudentDetailComponent/student-detail.component';
import { StudentService } from './app/StudentService/student.service';
import { Dashboard } from './app/dashboard/dashboard.component';
import { StudentDashboardComponent } from './app/student-dashboard/student-dashboard.component';
import { Modules } from './app/ModulesComponent/modules.component';
import { ModuleDetail } from './app/ModuleDetail/module-detail.component';
import { ModulesPerformance } from './app/ModulesPerformanceComp/modules-performance.component';
import { ModulePerformanceService } from './app/ModulePerformanceService/module-performance.service';
import { RegistrationComponent } from './app/RegistrationComponent/registration.component';
import { SideMenu } from './app/SideMenu/side-menu.component';
import { HttpModule } from '@angular/http';
import { WizardFormCreator } from './app/WizardComponent/wizard.component';
import { RoutingModule} from './app/main.routing';
//import {ROUTES} from '@angular/router/components/router_config_loader';
import { LoggedGuard } from './app/loggedin.guard';
import { AccountComponent } from './app/account/account.component';
import { SchoolComponent } from './app/school/school.component';
import { Validator } from './app/Validator/validator.directive';
import { LandingComponent } from './app/Landing/landing/landing.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    RoutingModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
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
    SchoolComponent
  ],
   entryComponents: [AppComponent],
  providers: [
    StudentService,
    MemberService,
    ModulePerformanceService,
    SessionService,
    Validator,
    LoggedGuard
   ],

  bootstrap:	[ AppComponent ]
})


export class AppModule {

}
