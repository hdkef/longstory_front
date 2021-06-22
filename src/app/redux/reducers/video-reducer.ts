import { VideoOne } from "src/app/models/video-one";
import * as fromVideoAction from '../actions/video-action'

export interface State{
    searchVideos:VideoOne[],
}

const initialState:State = {
    searchVideos:null,
}

export function videoReducer(
    state:State = initialState,
    action
){
    switch(action.type){
        case fromVideoAction.RETRIEVE_SEARCH_VIDEOS:
            console.log("RetrieveSearchVideos")
            return {
                ...state,
                searchVideos:action.payload.data,
            }
        default:
            return state
    }
}