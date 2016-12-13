import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Registration } from './registration';
import { Observable } from 'rxjs/Observable';


@Component({

	templateUrl: './registration.component.html',
	styleUrls: ['../css/forms/main.css'],
	selector: 'registration-comp'
})

export class RegistrationComponent implements OnInit {
	public registrationForm: FormGroup;
	public date:Date;
	public successfulReg:boolean;
	public responseMessage: String;
	public validToken:boolean = false;
	public post_url: String;

	constructor(private http:Http, private fB:FormBuilder){
		this.successfulReg = false;
		this.validToken = false;	
		this.date = new Date();
		this.post_url = '../../php_services';
	}

	ngOnInit() {
		this.getValidTokens();
		this.registrationForm = this.fB.group({
			username: ['username', [Validators.required, Validators.minLength(5)]],
			password: ['your best password', [Validators.required, Validators.minLength(5)]],
			userfirst: ['Your first name', [Validators.required, Validators.minLength(2)]],
			userlast: ['Your last name', [Validators.required, Validators.minLength(2)]],
			schoolname: ['Your school', [Validators.required, Validators.minLength(4)]],
			registrationToken: ['(hint: it was in your e-mail)', [Validators.required, Validators.minLength(5)]],
			grade: ['Your Grade', [Validators.required, Validators.maxLength(2)]]
		})
	}

	sendForm(regForm:Registration){
	let headers = new Headers({'Content-Type': 'application/json'});
   	let token = localStorage.getItem('token');
		this.http.post(this.post_url + '/registerUser', {'regForm':'regForm'}, {headers:headers}).map( res => res.json()).subscribe( resp => { this.responseMessage = resp.data; },
			error => console.log("Update failed."));
	}

	public getValidTokens():Observable<number[]>{
		return this.http.get('../php_services/getAllTokens').map(res => res.json().data as number[]);
	}

}