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
        avatarurl:""
    },
    token:"",
}

export function AuthReducer (
    state:State = initState,
    action
){
    switch(action.type){
        case fromAuthAction.LOGIN_OK:
            return {
                ...state,
                user:{
                    id:action.payload.id,
                    username:action.payload.username,
                    avatarurl:action.payload.avatarurl,
                },
                token:action.payload.token,
            }
        default:
            return state
    }
}