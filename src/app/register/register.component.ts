import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registerForm:FormGroup

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'Username':new FormControl(null,[Validators.required,this.customValidator(new RegExp(/^[\w\W]{5,10}$/))]),
      'Pass':new FormControl(null,[Validators.required,this.customValidator(new RegExp(/^[\w\W]{5,10}$/))]),
      'Email':new FormControl(null, [Validators.required,Validators.email]), 
    })
  }

  customValidator(pattern:RegExp):ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = pattern.test(control.value);
      return valid ? null : {custom:{value: control.value}};
    };
  }

}
