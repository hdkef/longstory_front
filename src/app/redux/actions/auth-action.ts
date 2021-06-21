import { Action } from "@ngrx/store"
import { User } from "src/app/models/user"

export const LOGOUT_START = "auth logout start"
export const LOGOUT_OK = "auth logout ok"
export const LOGIN_START = "auth login start"
export const AUTOLOGIN_START = "auth autologin start"
export const LOGIN_OK = "auth login ok"
export const SEND_INFO = "auth send info"

export class LogoutOK implements Action{

    constructor(){}
    type: string = LOGOUT_OK
}

export class LogoutStart implements Action{

    constructor(){}
    type: string = LOGOUT_START
}

export class LoginStart implements Action{

    constructor(public payload:{username:string,pass:string}){}
    type: string = LOGIN_START
}

export class AutoLoginStart implements Action {

    constructor(){}
    type:string = AUTOLOGIN_START

}

export class LoginOK {

    constructor(public payload:{user:User,token:string}){}
    type:string = LOGIN_OK
}

export class SendInfo implements Action{

    constructor(public payload:{info:string}){}
    type: string = SEND_INFO

}