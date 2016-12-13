import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import { Sysadmin } from './sysadmin';
  

@Component({
  moduleId: module.id,
  selector: 'app-sys-admin',
  templateUrl: './sys-admin.component.html',
  styleUrls: ['./sys-admin.component.css']
})
export class SysAdminComponent implements OnInit {
	public sysAdminForm: FormGroup;
	public date:Date;
	public adminName:String;

  constructor(private http:Http, private fB:FormBuilder) { 
    this.date = new Date();
    this.adminName = 'Adrian';
  }

  ngOnInit() {
  	this.sysAdminForm = this.fB.group({
        teacherName: ['', [Validators.required, Validators.minLength(2)]],
         schoolName: ['', [Validators.required]],
         designation: ['', [Validators.required]],
         district: ['', [Validators.required]],
         districtCity: ['', [Validators.required]],
         districtState: ['', [Validators.required]],
         schoolAccreditation: ['', [Validators.required]]

  	})
  }

  save(track:Sysadmin){
    console.log(JSON.stringify(track));
  }

}
