/* module-detail.component.ts */

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Module } from '../Module/module';
import { ModulePerformanceService } from '../ModulePerformanceService/module-performance.service';

@Component({
    moduleId: module.id,
	selector: 'module-detail',
	templateUrl: './module-detail.component.html',
    styleUrls: [ '../css/detail/main.css']
})


export class ModuleDetail implements OnInit {
	//@Input()
    module: Module;

    constructor(
        private modulePerfService: ModulePerformanceService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
    this.route.params.forEach((params: Params) => {        
        let modId = params['modId'];
        this.modulePerfService.modules.map( mods => mods.find(mod => modId == mod.modId)); 
         
    });        
   
}

}