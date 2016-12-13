import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolComponent} from "../school/school.component";
import {WizardFormCreator} from "../WizardComponent/wizard.component";
import {ModuleDetail} from "../ModuleDetail/module-detail.component";
import {Modules} from "../ModulesComponent/modules.component";
import {ModulesPerformance} from "../ModulesPerformanceComp/modules-performance.component";
import {SideMenu} from "../SideMenu/side-menu.component";
import {StudentDetail} from "../StudentDetailComponent/student-detail.component";
import {Students} from "../StudentsComponent/students.component";
import {RegistrationComponent} from "../RegistrationComponent/registration.component";
import {AccountComponent} from "../account/account.component";
import {StudentDashboardComponent} from "../student-dashboard/student-dashboard.component";
import {Dashboard} from "../dashboard/dashboard.component";
import {SysAdminComponent} from "../sys-admin/sys-admin.component";
import {LandingComponent} from "../Landing/landing/landing.component";
import {LoggedGuard} from "../loggedin.guard";
import {LoginComponent} from "./login.component";

const routes : Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: '', canActivate: [LoggedGuard], children: [
    {path: 'landing', component: LandingComponent},
    {path: 'sysadmin', component: SysAdminComponent},
    {path: 'dashboard', component: Dashboard},
    {path: 'student-dashboard', component: StudentDashboardComponent},
    {path: 'account', component: AccountComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'students', component: Students},
    {path: 'detail/:id', component: StudentDetail},
    {path: 'side-menu', component: SideMenu},
    {path: 'modules-performance', component: ModulesPerformance},
    {path: 'modules', component: Modules},
    {path: 'modDetail/:modId', component: ModuleDetail},
    {path: 'wizard', component: WizardFormCreator},
    {path: 'school', component: SchoolComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LoginRoutingModule { }
