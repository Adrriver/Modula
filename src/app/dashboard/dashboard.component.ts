import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Student } from '../Student/student';
import { Teacher } from '../Teacher/teacher';
import { StudentService } from '../StudentService/student.service';
import { ModulePerformance } from '../ModulePerformance/module-performance';
import { ModulePerformanceService } from '../ModulePerformanceService/module-performance.service';
import { Module } from '../Module/module';
import { MemberService } from '../member-service.service';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';



/* keep going! */
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html'
})

export class Dashboard implements OnInit {
	public students: Student[];
	public modules: Module[];
	public modulesPerf: ModulePerformance[];
	public userStatus: String;
	public get_url:String;
	public teacher:Teacher;
	public student: Student;

	constructor(private memberService: MemberService,
				private modulePerfService: ModulePerformanceService,
				private studentService: StudentService,
				private router: Router,
				private http:Http) {
					this.get_url = '../../php_services';

	}

	ngOnInit():void {
		this.memberService.getMember().map((user) => { if(localStorage.getItem('status') == 'teacher'){
					this.userStatus = 'teacher';
					this.studentService.students.map( s => this.students = s);
						//get all modules created by this teacher
						let T = <Teacher>user;
						this.teacher = T;
						this.modulePerfService.modules.map(res => res).subscribe( mods => {
							this.modules = mods;
						});
						//get all ModulePerformance instances for teacher's students
						this.modulePerfService.modulesPerformance.map(res => res).subscribe( modsPerf => { this.modulesPerf = modsPerf;});
				} else {
					this.userStatus = 'student';
					this.memberService.getMember().map((user) => user).subscribe( user => {
						 this.modulePerfService.modulesPerformance.map(res => res).subscribe( modsPerf =>
								{ this.modulesPerf = modsPerf;
									//get active module
									this.modulePerfService.loadStudentModules();
								   this.student = <Student>user; },
									error => console.log("Unable to retrieve student's performance records"))});


				}
				}
			);

	}

	setUserStatus(status:String): void {
		this.userStatus = status;
	}

	gotoStudentDetail(student: Student): void {
		let link = ['/detail', student.username];
		this.router.navigate(link);

	}

	gotoModuleDetail(module:Module): void {
		let link = ['/modDetail', module.modId];
		this.router.navigate(link);
	}

	gotoPerformanceDetail(perf:ModulePerformance): void {
		let link = ['/perfDetail', perf.modPerfId];
		this.router.navigate(link);
	}
}
