import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/reducers/app-reducer';
import {LoginStart} from '../redux/actions/auth-action'
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private store:Store<AppState>, private router:Router) { }

  loginForm:FormGroup
  authSubs:Subscription

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'pass': new FormControl(null,Validators.required),
    })
  }

  ngOnDestroy(): void {
    if (this.authSubs){
      this.authSubs.unsubscribe()
    }
  }

  goLogin(){
    let username = this.loginForm.value.username
    let pass = this.loginForm.value.pass
    this.store.dispatch(new LoginStart({username:username,pass:pass}))
    this.authSubs = this.store.select("auth").subscribe((data)=>{
      if(data["token"]){
        this.router.navigateByUrl("/dashboard")
      }
    })
  }

}
