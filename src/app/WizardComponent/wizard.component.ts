import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Validators, FormGroup, FormControl, FormArray, FormBuilder, NG_VALIDATORS } from '@angular/forms';
import { Wizard, Module, QAndA } from '../WizardInterface/wizard.interface';
import { MemberService } from '../member-service.service';
import { Teacher } from '../Teacher/teacher';
import { Validator } from '../Validator/validator.directive';
import { ReactiveFormsModule } from '@angular/forms';



@Component({

	selector: 'wizard',
	templateUrl: './wizard.component.html',
	styleUrls: [ '../css/forms/main.css' ]
})

export class WizardFormCreator implements OnInit {
	public wizardForm: FormGroup;
	public teacher: Teacher;
	public date:Date;
	public submissionResult:String;
	public submitNow:boolean;
	public validator:Validator;

	constructor(private fB: FormBuilder,
		private memberService: MemberService,
		private http:Http) {
		this.submitNow = false;
		this.date = new Date();

	}

	ngOnInit(){
		this.validator = new Validator();
		this.memberService.teacherMember.subscribe( teacher =>
			 { this.wizardForm = this.fB.group({
				gameName: ['', [Validators.required, Validators.minLength(10)]],
				teacher: [ teacher, [Validators.required]],
				class: ['', [Validators.required]],
				dateCreated: ['date', [Validators.required]],
				keywords: ['', [Validators.required, Validators.minLength(3)]],
				grade: ['', [Validators.required, Validators.maxLength(1)]],
				modules: this.fB.array([
						this.initModule()
					]),
				invited: ['', [Validators.required, this.validator.validate]]
			});
				this.teacher = teacher;
			}, error => console.log("Error in Wizard Form Component; ngOnInit failed."));


	}

	initModule() {
		return this.fB.group({
			modId: ['', [Validators.maxLength(0)]],
			difficulty: ['', [Validators.required]],
			questionCount: ['', [Validators.required]],
			modName: ['', [Validators.required, Validators.minLength(3)]],
			questions: this.fB.array([
				this.initQuestion(),
				])
		});
	}

	addModule(){

		const contr = <FormArray>this.wizardForm.controls['modules'];
		contr.push(this.initModule());
	}

	removeModule(p:number){
		const cont = <FormArray>this.wizardForm.controls['modules'];
		cont.removeAt(p);
	}

	initQuestion(){
		return this.fB.group({

			qNum: ['', [Validators.required]],
			question: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
			correct: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
			incorr_a: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
			incorr_b: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
			incorr_c: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]]

		});
	}

	addQuestion(){
		const cont = <FormArray>this.wizardForm.controls['questions'];
		cont.push(this.initQuestion());
	}

	removeQuestion(p:number){
		const cont = <FormArray>this.wizardForm.controls['questions'];
		cont.removeAt(p);
	}
	save(track:Wizard){
		let error;

		this.http.post('../../php_services/submit_module', JSON.stringify(track)).
			map( res => res.json()).subscribe(response => { this.submissionResult = response.data }, error => error = "We're sorry, your game was not saved.  Please contact us for help." );
			this.submissionResult = error;
	}

	submitNowToggle(){
		this.submitNow = !this.submitNow;

	}


}






