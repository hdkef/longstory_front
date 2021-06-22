import { ActionReducerMap } from "@ngrx/store";
import * as fromAuthReducer from './auth-reducer'
import * as fromCachingReducer from './caching-reducer'
import * as fromVideoReducer from './video-reducer'

export interface AppState {
    auth:fromAuthReducer.State
    caching:fromCachingReducer.State
    video:fromVideoReducer.State
}

export const AppReducer:ActionReducerMap<AppState> = {
    auth:fromAuthReducer.AuthReducer,
    caching:fromCachingReducer.cachingReducer,
    video:fromVideoReducer.videoReducer,
}