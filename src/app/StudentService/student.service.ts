import { Injectable, Pipe } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { Student } from '../Student/student';
import { MemberService } from '../member-service.service';
import { ModulePerformanceService } from '../ModulePerformanceService/module-performance.service';
import { ModulePerformance } from '../ModulePerformance/module-performance';


@Injectable()
export class StudentService {
	
	public req_url:String = '../../php_services';
	public students:Observable<Student[]>; // Store as observable of Student?
	private students_bxs: BehaviorSubject<Student[]>;
	private persistedStudents: {
		students: Student[]
	};

	public modsPerf:ModulePerformance[];


	constructor(private http:Http, private memberService:MemberService, 
				private modsPerfService:ModulePerformanceService){ 
				this.getModulesPerformance();
				modsPerfService.modulesPerformance.map( mp =>  this.modsPerf = mp);
				this.persistedStudents = { students: [] };
				this.students_bxs = <BehaviorSubject<Student[]>>new BehaviorSubject([]);
				this.students = this.students_bxs.asObservable();
	}

	getModulesPerformance():void {
		this.modsPerfService.modulesPerformance.map( res => res).subscribe( modsPerf => {  this.modsPerf = modsPerf});
	}

	loadStudents(): void {
		http.get('this.req_url' + '/getStudents' ).map(res => res.json())
				.subscribe( students => { 
					students.forEach((student, index) => {this.createStudent(student).subscribe( student => { this.persistedStudents.students[index] = student;})});
						this.students_bxs.next(Object.assign({}, this.persistedStudents).students);
				}, error => console.log("loadStudents failed."));		
	}

	getStudents(): Observable<Student[]> {        	
 		return this.students;
	}	  
    
    getStudent(id: String): Observable<Student> {
     	return this.getStudents().map(students => students.find(student => student.username === id));
     	
     }
    
	public createStudent(student): Observable<Student>{		
		// let mp = this.modsPerfService.modulesPerformance;
		 let allModsPerf;
		 this.modsPerfService.getStudentPerformance(student.username).subscribe( modsPerf => {
		 	allModsPerf = modsPerf;});
		 
  	
			let student_ = new Student(student, allModsPerf);
			return Observable.of(student_);
	}
}



