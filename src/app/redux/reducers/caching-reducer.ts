import { VideoOne } from "src/app/models/video-one";
import * as fromCachingAction from '../actions/caching-action'

export interface State{
    searchVideos:VideoOne[],
    curPageSearchVideos:number,
    totalSearchVideos:number,
}

const initialState:State = {
    searchVideos:null,
    curPageSearchVideos:0,
    totalSearchVideos:0,
}

export function cachingReducer(
    state:State = initialState,
    action
){
    switch(action.type){
        case fromCachingAction.CURRENT_PAGE_SEARCH_VIDEOS:
            return {...state,curPageSearchVideos:action.payload.page}
        case fromCachingAction.ADD_NEW_SEARCH_VIDEOS:
            return {
                ...state,
                searchVideos:action.payload.data,
                totalSearchVideos:action.payload.totalpage,
                curPageSearchVideos:action.payload.page,
            }
        default:
            return state
    }
}