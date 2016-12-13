//<reference path="./src/app/StudentDetailComponent/student-detail.component.ts"/>
/* components-components.main.module.ts */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Students } from './StudentsComponent/students.component';
import { StudentDetail } from './StudentDetailComponent/student-detail.component';
import { Dashboard } from './dashboard/dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
//import { Teachers } from './TeachersComponent/teachers.component';
//import { TeacherDetail } from './TeacherDetail/teacher-detail.component';
import { Modules } from './ModulesComponent/modules.component';
import { ModuleDetail } from './ModuleDetail/module-detail.component';
import { LoggedGuard } from './loggedin.guard';
import { ModulesPerformance } from './ModulesPerformanceComp/modules-performance.component';
import { RegistrationComponent } from './RegistrationComponent/registration.component';
import { SideMenu } from './SideMenu/side-menu.component';
import { WizardFormCreator } from './WizardComponent/wizard.component';
import { AppComponent } from './ModulaComponent/app.component';
import { SysAdminComponent } from './sys-admin/sys-admin.component';
import { AccountComponent } from './account/account.component';
import { LandingComponent } from './Landing/landing/landing.component';
import { SchoolComponent } from './school/school.component';


  const routes : Routes = [
  {path: '/', pathMatch: 'full', component: LandingComponent},
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

    ];



/*@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})*/
export const routing = RouterModule.forChild(routes);
