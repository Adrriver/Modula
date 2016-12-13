import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Student/student';
import { StudentService } from '../StudentService/student.service';
import { ModulePerformanceService } from '../ModulePerformanceService/module-performance.service';

@Component({
	moduleId: module.id,
	templateUrl: './side-menu.component.html',
	selector: 'menu-side',
	styleUrls: ['../css/components/main.css']
})

export class SideMenu implements OnInit { 
	public username : String;
	//public links: Link[] = [];

	constructor(private modulePerformanceService: ModulePerformanceService,
				private router: Router) { 
				//serve side menu

	}

	ngOnInit(): void {
		/*this.linkService.getLinks(userId)
			.then(links => this.links = links);*/
	}

	
}





