import { Router, RouterOutlet, CanActivate } from '@angular/router';
import { SessionService } from './SessionService/session.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedGuard implements CanActivate {



constructor(private sesServ:SessionService) { }


		canActivate(){
			return this.sesServ.isLoggedIn();
		}

}
