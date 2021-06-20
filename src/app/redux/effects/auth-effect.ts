import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromAuthAction from '../actions/auth-action'
import {catchError, map, switchMap} from 'rxjs/operators'
import { of } from "rxjs";
import { GqlService } from "src/app/gql.service";

@Injectable()
export class AuthEffect {
    constructor(private action$:Actions, private gql:GqlService){}

    loginStart = createEffect(()=>{
        return this.action$.pipe(
            ofType(fromAuthAction.LOGIN_START),
            switchMap((action:fromAuthAction.LoginStart)=>{
                console.log("loginStart effects, pass : ", action.payload.pass)
                let query = `query login($username:String!,$pass:String!) {
                    login(input:{username:$username,pass:$pass}){
                        user {
                            id
                            username
                            avatarurl
                        }
                        type
                        token
                    }
                }`
                let payload = JSON.stringify(
                    {
                        query,
                        variables:{"username":action.payload.username,"pass":action.payload.pass},
                    }
                )
                return this.gql.fetch(payload).pipe(
                    map((res)=>{
                        console.log(res)
                        let token = res["data"]["login"]["token"]
                        if (token)
                        this.saveToLocal(token)
                        return new fromAuthAction.SendInfo({info:"Login OK"})
                    }),
                    catchError((err)=>{
                        return of(new fromAuthAction.SendInfo({info:""}))
                    })
                )
            })
        )
    })

    autologinStart = createEffect(()=>{
        return this.action$.pipe(
            ofType(fromAuthAction.AUTOLOGIN_START),
            switchMap((action:fromAuthAction.AutoLoginStart)=>{
                let token = this.getLocal()
                if (token){
                    let query = `query autologin($token:String!) {
                        autologin(input:{token:$token}){
                            user {
                                id
                                username
                                avatarurl
                            }
                            type
                            token
                        }
                    }`
                    let payload = JSON.stringify({
                        query,
                        variables:{"token":token}
                    })
                    return this.gql.fetch(payload).pipe(
                        map((res)=>{
                            console.log(res)
                            return new fromAuthAction.SendInfo({info:""})
                        }),
                        catchError((err)=>{
                            return of(new fromAuthAction.SendInfo({info:""}))
                        })
                    )
                }
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
