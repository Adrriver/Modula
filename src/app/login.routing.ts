/**
 * Created by Adrian&Alanna on 12/12/2016.
 */
import { Routes }         from '@angular/router';
import { LoggedGuard }      from './loggedin.guard';
import { SessionService } from './SessionService/session.service';

import {LandingComponent} from "./Landing/landing/landing.component";

export const loginRoutes: Routes = [
  { path: 'login', component: LandingComponent}
];

export const authorizationProviders = [
  LoggedGuard,
  SessionService
];
