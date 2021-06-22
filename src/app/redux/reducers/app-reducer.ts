import { ActionReducerMap } from "@ngrx/store";
import * as fromAuthReducer from './auth-reducer'
import * as fromCachingReducer from './caching-reducer'

export interface AppState {
    auth:fromAuthReducer.State
    caching:fromCachingReducer.State
}

export const AppReducer:ActionReducerMap<AppState> = {
    auth:fromAuthReducer.AuthReducer,
    caching:fromCachingReducer.cachingReducer,
}