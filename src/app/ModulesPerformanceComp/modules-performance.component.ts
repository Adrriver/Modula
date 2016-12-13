/* mod-performance */
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Module } from '../Module/module'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import { ModulePerformanceService } from '../ModulePerformanceService/module-performance.service';
import { ModulePerformance } from '../ModulePerformance/module-performance';


@Component({
	moduleId: module.id,
	templateUrl: './module-performance.component.html',
	selector: 'modperformance'
})

export class ModulesPerformance implements OnInit {


  modPerfId:String;
  gamePlayPercentage: number; /* points corresponding to non-academic game play activities, excluding measures such as speed of module completion, etc. */
    bonusPoints: number;
    score: number;
    modules: Module[];
    modulePerformance:ModulePerformance[];
    selectedPerf: ModulePerformance;
    public active:Boolean;
	
  constructor(private genHttp:Http, 
				private modulePerformanceService:ModulePerformanceService, private router:Router){ }

  	getModulesPerf():void {
 		   this.modulePerformanceService.modulesPerformance.map(res => res).subscribe( modsP => {  this.modulePerformance = modsP; });
 		 this.getMods();
  	}

  	getMods():void{
  		this.genHttp.get('../../php_services/getModules').map((res:Response) => //type returned by this.extractModules?
  						this.extractModules(res).map((mods:Module[]) => this.modules = mods));
  	}

  	ngOnInit(): void {
  		this.getMods();
  	}

  	goToDetail(): void {
  		this.router.navigate(['/perfDetail', this.selectedPerf.modPerfId])
  	}

  	private extractModules(response:Response): Observable<Module[]>{
  		return response.json().map((res:Response) =>
  						res.json().data as Module[]);
  	}

}
