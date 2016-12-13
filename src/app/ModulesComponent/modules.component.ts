import { Component, OnInit } from '@angular/core';
import { Module } from '../Module/module';
import { ModulePerformanceService } from '../ModulePerformanceService/module-performance.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
	moduleId: module.id,
	selector: 'track-modules',
	templateUrl: './modules.component.html',
	styleUrls: [ '../css/components/main.css' ]

})

export class Modules implements OnInit {
	title = 'Gametrack Modules';
	selectedModule: Module;
	modules: Module[];

	constructor(private modulePerfServ: ModulePerformanceService, 
				private router: Router ) {
					this.modules = []; }

	getModules(): void {
		this.modulePerfServ.modules.map(res => res).subscribe( mods => 
			{ this.modules = mods });
	}

	onSelect(module: Module): void {
		this.selectedModule = module;
	}

	ngOnInit(): void {
		this.getModules();
	}

	goToDetail(): void {
		this.router.navigate(['/modDetail', this.selectedModule.modId])
	}

}