import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './/ModulaComponent/app.component';
import { MemberService } from './MemberService/member-service.service';
import { SessionService } from './/SessionService/session.service';
import { SysAdminComponent } from './/sys-admin/sys-admin.component';
import { Students } from './/StudentsComponent/students.component';
import { StudentDetail } from './/StudentDetailComponent/student-detail.component';
import { StudentService } from './/StudentService/student.service';
import { Dashboard } from './/dashboard/dashboard.component';
import { StudentDashboardComponent } from './/student-dashboard/student-dashboard.component';
import { Modules } from './/ModulesComponent/modules.component';
import { ModuleDetail } from './/ModuleDetail/module-detail.component';
import { ModulesPerformance } from './/ModulesPerformanceComp/modules-performance.component';
import { ModulePerformanceService } from './/ModulePerformanceService/module-performance.service';
import { RegistrationComponent } from './/RegistrationComponent/registration.component';
import { SideMenu } from './/SideMenu/side-menu.component';
import { HttpModule } from '@angular/http';
import { WizardFormCreator } from './/WizardComponent/wizard.component';
import { AppRoutingModule} from './app.routing.module';
import { LoggedGuard } from './/loggedin.guard';
import { AccountComponent } from './/account/account.component';
import { SchoolComponent } from './/school/school.component';
import { Validator } from './/Validator/validator.directive';
import { LandingComponent } from './/Landing/landing/landing.component';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RouterModule} from '@angular/router';
import {LoginModule} from "./login/login.module";

@NgModule({
  imports: [
    FormsModule,
    LoginModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    AppComponent
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
