import * as fromAuthAction from '../actions/auth-action'
import {User} from '../../models/user'

export interface State {
    user:User
    token:string
}

const initState:State = {
    user:{
        id:"",
        username:"",
        avatarurl:"",
        email:"",
    },
    token:"",
}

export function AuthReducer (
    state:State = initState,
    action
){
    switch(action.type){
        case fromAuthAction.LOGIN_OK:
            console.log("LOGIN OK")
            return {
                ...state,
                user:action.payload.user,
                token:action.payload.token,
            }
        default:
            return state
    }
}