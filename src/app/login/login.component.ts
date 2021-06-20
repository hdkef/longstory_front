import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/reducers/app-reducer';
import {LoginStart} from '../redux/actions/auth-action'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  loginForm:FormGroup

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'pass': new FormControl(null,Validators.required),
    })
  }

  goLogin(){
    let username = this.loginForm.value.username
    let pass = this.loginForm.value.pass
    this.store.dispatch(new LoginStart({username:username,pass:pass}))
  }

}
