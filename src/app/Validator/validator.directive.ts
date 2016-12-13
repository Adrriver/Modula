import { Directive, forwardRef } from '@angular/core';
import { Validators, FormGroup, FormControl, FormArray, FormBuilder, NG_VALIDATORS } from '@angular/forms';

	function recipListValidation() {
		return (control:FormControl) => {
			let List_Regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

		let splits = control.value.split(",");
		let valid;



		if(splits.length === 0){

		/*	return splits.forEach((address) => {
				List_Regex.test(address) ? null : {
					validateEmail:{
						 valid:false
					}
				};
			});*/
		} else {
			 return List_Regex.test(control.value) ? null : {
      			validateEmail:{
         		 valid: false
        		}
    		};
		}


		}
	}


@Directive({
	selector: '[validateList][ngModel],[validateList][formControl]',
	providers: [ { provide: NG_VALIDATORS, useExisting: forwardRef(() => Validator),multi: true}]
})
export class Validator {

	emailVal: Function;

	constructor(){
		this.emailVal = recipListValidation();
	}

	validate(control:FormControl) {
		return this.emailVal(control);
	}
}

