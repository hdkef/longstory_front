import { VideoOne } from "src/app/models/video-one";
import * as fromVideoAction from '../actions/video-action'

export interface State{
    searchVideos:VideoOne[],
}

const initialState:State = {
    searchVideos:null,
}

export function cachingReducer(
    state:State = initialState,
    action
){
    switch(action.type){
        case fromVideoAction.RetrieveSearchVideos:
            return {
                ...state,
                searchVideos:action.payload.data,
            }
        default:
            return state
    }
}