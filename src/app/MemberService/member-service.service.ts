import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Module } from '../Module/module';
import { ModulePerformance } from '../ModulePerformance/module-performance';
import { ModulePerformanceService } from '../ModulePerformanceService/module-performance.service';
import { Teacher } from '../Teacher/teacher';
import { Student } from '../Student/student';
import { SessionService } from '../SessionService/session.service';
import { User } from '../User/user';


@Injectable()
export class MemberService {

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



  constructor(private http:Http, private modPerfService:ModulePerformanceService,
  		  	  private sService:SessionService) {
    this.modPerfService.loadModulesPerformance();

        	//this.student_bxs = <BehaviorSubject<Student>>new BehaviorSubject<Student>;
        	//this.teacher_bxs = <BehaviorSubject<Teacher>>new BehaviorSubject<Teacher>;


        	this.modPerfService.modules.map(res => res).subscribe( mods =>
            { this.modules = mods;});
          this.modPerfService.modulesPerformance.map(res => res).subscribe( modsPerf =>
            { this.modulesPerf = modsPerf;});
        	this.get_url = '../../php_services/';


  }

  //called from session service
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

  	//Download fresh copy of user account information, e.g., after account settings
  	//are successfully modified in My Account component
  refreshUser(){
  		let token = this.sService.getToken();
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

}

/* loadUser signature
	loadUser($loginSucc, $token, $username) */
