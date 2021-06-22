import { VideoOne } from "src/app/models/video-one";
import * as fromCachingAction from '../actions/caching-action'

export interface State{
    searchVideos:VideoOne[],
    totalSearchVideos:number,
}

const initialState:State = {
    searchVideos:null,
    totalSearchVideos:0,
}

export function cachingReducer(
    state:State = initialState,
    action
){
    switch(action.type){
        case fromCachingAction.AddNewSearchVideos:
            return {
                ...state,
                searchVideos:action.payload.data,
                totalSearchVideos:action.payload.totalpage,
            }
        default:
            return state
    }
}