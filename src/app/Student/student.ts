import { Component, OnInit } from '@angular/core';
import { Module } from '../Module/module';
import { ModulePerformance } from '../ModulePerformance/module-performance';
import { User } from '../User/user';

export class Student extends User {
  
  public username:String;
  public password:String;
	public userStatus:String;
  public firstName: String;
  public lastName: String;
	public schoolId:String;
	public email:String; 
  public activeModule: ModulePerformance;
  public completedModules: ModulePerformance[];
  
  constructor(profile, modulesPerformance:ModulePerformance[]){
    let active;
  	super(profile.username);
    this.username = profile.username;
    this.userStatus = profile.status;
    this.firstName = profile.user_first;
    this.lastName = profile.user_last;
    this.schoolId = profile.school_id;
    this.email = profile.email;
    this.password = profile.password;
  	modulesPerformance.forEach((modPerf) => { if(modPerf.modActive == true) this.activeModule = modPerf; active = modPerf.modPerfId});
  	modulesPerformance.forEach((modPerf) => { if(!modPerf.modPerfId == active) this.completedModules.push(modPerf);});


  	}
  }

