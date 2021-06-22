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
    let oldSearchVideos = state.searchVideos
    switch(action.type){
        case fromCachingAction.CURRENT_PAGE_SEARCH_VIDEOS:
            return {...state,curPageSearchVideos:action.payload.page}
        case fromCachingAction.ADD_NEW_SEARCH_VIDEOS:
            if (!oldSearchVideos){
                return {
                    ...state,
                    searchVideos:action.payload.data,
                    totalSearchVideos:action.payload.page,
                    curPageSearchVideos:action.payload.page,
                }
            }else{
                let newSearchVideos = oldSearchVideos.concat(action.payload.data)
                return {
                    ...state,
                    searchVideos:newSearchVideos,
                    totalSearchVideos:action.payload.page,
                    curPageSearchVideos:action.payload.page,
                }

            }
        default:
            return state
    }
}