/* module-performance-service */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Module } from '../Module/module';
import { ModulesPerformance } from '../ModulesPerformanceComp/modules-performance.component';
import { SessionService } from '../SessionService/session.service';
import { ModulePerformance } from '../ModulePerformance/module-performance';
import { Question } from '../Question/question';
import 'rxjs/add/observable/of';


@Injectable() //takes care of both ModulePerformance and Module requests.
export class ModulePerformanceService {

    modules: Observable<Module[]>;
    modulesPerformance: Observable<ModulePerformance[]>;
    private modules_bxs: BehaviorSubject<Module[]>;
    private modulesPerformance_bxs: BehaviorSubject<ModulePerformance[]>;
    private sessionModules: {
        [modules:string]:Module[]
    };
    private sessionModsPerf: {
        [modulesPerf:string]:ModulePerformance[]
    };
    private get_url: '../../php_services/';
    public username:String;
    constructor(private http:Http){
                    this.sessionModules["modules"] = [];
                    this.sessionModsPerf["modulesPerf"] = [];
                    this.modules_bxs = <BehaviorSubject<Module[]>>new BehaviorSubject([]);
                    this.modulesPerformance_bxs = <BehaviorSubject<ModulePerformance[]>>new BehaviorSubject([]);
                    this.modules = this.modules_bxs.asObservable();
                    this.modulesPerformance = this.modulesPerformance_bxs.asObservable();
                    this.username = localStorage.getItem('username');
    }


    public loadModulesPerformance():void{


                this.http.get('this.get_url/getMods/')
                    .map(res => res.json()).subscribe( mods =>
                            {   this.extractM(mods);
                                this.modules_bxs.next(
                                    Object.assign({}, this.sessionModules["mdoules"]));},
                                error => console.log("Loading Modules inside MP Service has failed."));


                 this.http.get('this.get_url + getModsPerf')
                    .map(res => res.json()).subscribe( modsPerf =>
                            { this.extractMP(modsPerf);
                                this.modulesPerformance_bxs.next(
                                    Object.assign({}, this.sessionModsPerf["modulesPerf"]))},
                                error => console.log("ngOnInit inside MP Service has failed."));


    }

    //load individual ModulePerformance instance
    public loadModulePerf():void{

    }

    public getStudentPerformance(username:String):Observable<ModulePerformance[]> {

        return Observable.of(this.sessionModsPerf["modulesPerf"].filter(modPerf => modPerf.modPerfId == username));
    }

    public loadStudentModules():void {
        let studentModules = this.sessionModsPerf["modulesPerf"].map((x) => x.modId );
        /*return this.modules.map(function(mod){
            studentModules.foreach((id)=> { if(mod.modId == id) return mod } )});*/
    }


    public getActiveModule():Observable<ModulePerformance>{
        let active = this.modulesPerformance.map(modsPerf => modsPerf.find(mp => mp.modActive === true));
        return active;
    }

    /*public loadModule(modId:String):void{
        //load invidual module according to id

    }*/
    private extractMP(res):void {

        let newModPerf;
        res.map(res => res.json()).subscribe( mpPart =>
            { this.sessionModsPerf["modulesPerf"].forEach((mod,index) =>
                { if(mod.modId == mpPart.modId)
                        this.sessionModsPerf["modulesPerf"][index] = new ModulePerformance(mpPart, mod.modId,null);

                });

             });


     }

     private extractM(res): void{
        let questions = http.get('../../php_services/get_questions?modId=' + res.modId).map(res=>res.json());
        res.map(res_ => res_.json()).subscribe( part =>
            { this.sessionModules["modules"].forEach((mod,index) =>
                { if(mod.modId == part.modId)
                    this.sessionModules["modules"][index] = new Module(part,questions);
                })});
     }
}

