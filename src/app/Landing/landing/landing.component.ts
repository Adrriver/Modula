import { Component, OnInit } from '@angular/core';
import { LoggedGuard } from '../../loggedin.guard';
import { Router } from '@angular/router';
import { SessionService } from '../../SessionService/session.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

export interface Login {

  username: String;
  password: String;

}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  title = 'Modula Students';
  public loginForm: FormGroup;

  constructor(private sessionService:SessionService, private fB: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fB.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(loginForm:Login):void{
   let response = this.sessionService.loginMember(loginForm);
   if(response) {
   this.router.navigate(['/dashboard']);
   } else {
   this.register();
   }
   };


  register(): void {
    this.router.navigate(['registration']);
  }
}
