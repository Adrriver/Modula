/* based on tutorial here: https://medium.com/@blacksonic86/authentication-in-angular-2-958052c64492#.2ngmnc4dj
 * adapted from JSON to PHP backend
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Module } from '..//Module/module';
import { ModulePerformance } from '../ModulePerformance/module-performance';
import { ModulePerformanceService } from '../ModulePerformanceService/module-performance.service';
import { Teacher } from '../Teacher/teacher';
import { Student } from '../Student/student';



 @Injectable()
 export class SessionService /*implements OnInit*/ {
 	public sessionCurrent = false;
 	private loggedIn = false;
   teacherMember: Observable<Teacher>;
   studentMember: Observable<Student>;
   private teacher_bxs: BehaviorSubject<Teacher>;
   private student_bxs: BehaviorSubject<Student>;
   private persistedTeacher: Teacher;
   private persistedStudent: Student;
   private modulesPerf:ModulePerformance[];
   private modules:Module[];
   private userStatus: String;
   private get_url: String;

 	constructor(private http: Http, private modPerfService:ModulePerformanceService) {
 		this.loggedIn = !!localStorage.getItem('auth_token');

    this.modPerfService.loadModulesPerformance();

    //this.student_bxs = <BehaviorSubject<Student>>new BehaviorSubject<Student>;
    //this.teacher_bxs = <BehaviorSubject<Teacher>>new BehaviorSubject<Teacher>;


    this.modPerfService.modules.map(res => res).subscribe( mods =>
    { this.modules = mods;});
    this.modPerfService.modulesPerformance.map(res => res).subscribe( modsPerf =>
    { this.modulesPerf = modsPerf;});
    this.get_url = '../../php_services/';

  }

 	loginMember(credentials): Boolean {


 		this.http.post('../../php_services/login?username=' + credentials.username + '&password=' + credentials.password, JSON.stringify("login")).map((response:Response) => response.json()).subscribe(res => {
 						if(res.success) {
 							localStorage.setItem('token', res.token);
 							this.loggedIn = true;
 							//replace with call to own class method persistUser(username) this.memberService.persistUser(credentials.username);
 						}

 					});/*.catch((error:any)=> Observable.throw(error.json().error || 'Server error'));*/
						return this.loggedIn;
 	}

   persistUser(res){
     res.map( resp => resp.json()).subscribe( user =>
     { if(user.userStatus == 'student'){
       this.persistedStudent = new Student(user,this.modulesPerf);
       this.userStatus = user.userStatus;
     } else {
       this.persistedTeacher = new Teacher(user);
       this.userStatus = user.userStatus;
     }
     }, error => console.log("Error in persistUser."));
   }

   refreshUser(){
     let token = this.getToken();
     if(this.userStatus === 'teacher'){
       this.http.get(this.get_url + '/loadUser/?username=' + this.persistedTeacher.username).map( fresh => fresh.json()).subscribe( user =>
       {   this.persistedTeacher = new Teacher(user);
         this.teacher_bxs = <BehaviorSubject<Teacher>>new BehaviorSubject(this.persistedTeacher);
         this.teacherMember = this.teacher_bxs.asObservable();
         this.teacher_bxs.next(Object.assign({}, this.persistedTeacher));
       }, error => console.log('Error in function refreshUser.'));
     } else if( this.userStatus === 'student'){
       this.http.get(this.get_url + '/loadUser/?username=' + this.persistedStudent.username)
         .map(student => student.json()).subscribe( user =>
       { this.modPerfService.modules.map(res => res).subscribe( mods =>
       { this.modules = mods;});
         this.persistedStudent = new Student(user, this.modulesPerf);
         this.student_bxs = <BehaviorSubject<Student>>new BehaviorSubject(this.persistedStudent);
         this.studentMember = this.student_bxs.asObservable();
         this.student_bxs.next(Object.assign({}, this.persistedStudent));
       }, error => console.log('Error in function refreshUser (student)'));
     }

   }

   getMember(): Observable<any>{
     let obs = new Observable(null);
     if(this.userStatus == 'teacher'){
       obs = this.teacherMember;
     } else {
       obs = this.studentMember;
     }
     return obs;  }

   getStatus(): String {
     return this.userStatus;
   }

 	logout(){
 		localStorage.removeItem('token');
 		this.loggedIn = false;
 	}

 	isLoggedIn(){
 		return this.loggedIn;
 	}

 	getToken():string{
 		return localStorage.getItem('token');

 	}



 }

 //remember to check that all responses contain json arrays, not strings, and if needed use JSON.pars(string) conversion.







