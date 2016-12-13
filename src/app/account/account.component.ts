import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl, NG_VALIDATORS} from '@angular/forms';
import { Account } from './/account.interface';
import { SessionService } from '../SessionService/session.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MemberService } from '../MemberService/member-service.service';
import { Student } from '../Student/student';
import { Teacher } from '../Teacher/teacher';
import { Directive, forwardRef } from '@angular/core';
import { Validator } from '../Validator/validator.directive';

@Component({
  moduleId: module.id,
  selector: 'account-settings',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
	public accountForm: FormGroup;
	public teacher: Teacher;
  public student: Student;
	public date: Date;
  public update_url:String;
  public status:String;
  public emailVal:Validator;

  constructor(private formB: FormBuilder, private memberService:MemberService,
  			  private http:Http ) {
            this.update_url = '/php_services/update_user';
  }

  ngOnInit() {
      this.emailVal = new Validator();
 	  this.status = localStorage.getItem('status');
  		if(this.status === 'teacher'){                      //type?
  			this.memberService.teacherMember.map( teacher => teacher).subscribe( teacher => {
  				  this.memberService.teacherMember.map(res=>res).subscribe( teacher =>
              { this.teacher = teacher});
            this.accountForm = this.formB.group({
  					username: [''],
            password: ['', [Validators.required, Validators.minLength(8)]],
  					firstName: ['', [Validators.required,Validators.minLength(2)]],
  					lastName: ['', [Validators.required, Validators.minLength(2)]],
  					schoolId: [''],
  					email: ['', [Validators.required, this.emailVal.validate]],
            deletAccount: ['']


  				});
            (<FormControl>this.accountForm.controls['username'])
              .setValue(this.teacher.username, { onlySelf: true });
              (<FormControl>this.accountForm.controls['password'])
              .setValue(this.teacher.password, { onlySelf: true });
              (<FormControl>this.accountForm.controls['firstName'])
              .setValue(this.teacher.firstName, { onlySelf: true });
              (<FormControl>this.accountForm.controls['lastName'])
              .setValue(this.teacher.lastName, { onlySelf: true });
              (<FormControl>this.accountForm.controls['schoolId'])
              .setValue(this.teacher.schoolId, { onlySelf: true });
              (<FormControl>this.accountForm.controls['email'])
              .setValue(this.teacher.email, { onlySelf: true });
  				}, error => console.log("Account was not updated."));
  		} else {
  			this.memberService.studentMember.subscribe( student =>
  				{ this.memberService.studentMember.map(res=>res).subscribe(student =>
              { this.student = student; });
            this.accountForm = this.formB.group({
  					username: [''],
            password: ['', [Validators.required, Validators.minLength(8)]],
  					firstName: ['',[Validators.required, Validators.minLength(2)]],
  					lastName: ['',[Validators.required, Validators.minLength(2)]],
  					schoolId: [''],
            email: ['', [Validators.required, this.emailVal.validate]]
  				});
  				}, error => console.log("Account information was not updated."));

             (<FormControl>this.accountForm.controls['username'])
              .setValue(this.student.username, { onlySelf: true });
              (<FormControl>this.accountForm.controls['password'])
              .setValue(this.student.password, { onlySelf: true });
              (<FormControl>this.accountForm.controls['firstName'])
              .setValue(this.student.firstName, { onlySelf: true });
              (<FormControl>this.accountForm.controls['lastName'])
              .setValue(this.student.lastName, { onlySelf: true });
              (<FormControl>this.accountForm.controls['schoolId'])
              .setValue(this.student.schoolId, { onlySelf: true });
              (<FormControl>this.accountForm.controls['email'])
              .setValue(this.student.email, { onlySelf: true });

  		}
  }


  save(accountInfor: Account){
  let headers = new Headers({'Content-Type': 'application/json'});
   let token = localStorage.getItem('token');
  	this.http.post(this.update_url + '/update_user?token=' + token, {accountInfor:accountInfor}, {headers: headers}).map( res => res.json()).subscribe( resp => {
          this.memberService.refreshUser();
          if(this.status === 'teacher'){
            this.memberService.teacherMember.map(res=>res).subscribe( teacher => {
              this.teacher = teacher; });


          } else {                            //what type is required here?
            this.memberService.studentMember.map(res=>res).subscribe( student => {
              this.student = student; });
            }},
                error => console.log("Could not fully update user."));



  }

  }

