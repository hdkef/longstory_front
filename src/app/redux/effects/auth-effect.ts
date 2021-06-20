import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromAuthAction from '../actions/auth-action'
import {switchMap} from 'rxjs/operators'
import { of } from "rxjs";

@Injectable()
export class AuthEffect {
    constructor(private action$:Actions){}

    loginStart = createEffect(()=>{
        return this.action$.pipe(
            ofType(fromAuthAction.SEND_INFO),
            switchMap((action:fromAuthAction.LoginStart)=>{
                //TOBEIMPLEMENT
                //GraphQL login
                return of(new fromAuthAction.SendInfo({info:""}))
            })
        )
    })

    autologinStart = createEffect(()=>{
        return this.action$.pipe(
            ofType(fromAuthAction.AUTOLOGIN_START),
            switchMap((action:fromAuthAction.AutoLoginStart)=>{
                //TOBEIMPLEMENT
                //GraphQL login
                return of(new fromAuthAction.SendInfo({info:""}))
            })
        )
    })

    logoutStart = createEffect(()=>{
        return this.action$.pipe(
            ofType(fromAuthAction.LOGOUT_START),
            switchMap((action:fromAuthAction.LogoutStart)=>{
                return of(new fromAuthAction.SendInfo({info:""}))
            })
        )
    })

    getLocal = () => {
        return localStorage.getItem("token")
    }

    saveToLocal = (token:string) =>{
        localStorage.setItem("token",token)
    }

    removeLocal = () => {
        localStorage.removeItem("token")
    }
}
