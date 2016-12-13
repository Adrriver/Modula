//<reference path="./src/app/StudentDetailComponent/student-detail.component.ts"/>
/* components-components.main.module.ts */
import { Routes, RouterModule } from '@angular/router';
import {loginRoutes, authorizationProviders} from "./app/login.routing";
import { routing } from './app/main.routing';

 const routes : Routes = [
  {path: '', pathMatch: 'full', loadChildren: 'components/main.module#MainModule'},
   ...loginRoutes,
      routing
   ];

 export const routingProviders: any[] = [
      authorizationProviders
   ]
/*@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})*/
export const ModulaRoutes = RouterModule.forRoot(routes);
