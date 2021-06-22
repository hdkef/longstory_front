import { Action } from "@ngrx/store"
import { VideoOne } from "src/app/models/video-one"

export const RETRIEVE_SEARCH_VIDEOS = "Video Retrieve Search Videos"
export const GET_NEW_SEARCH_VIDEOS = "Video Get New Search Videos"
export const SEND_INFO = "Send Info"

export class RetrieveSearchVideos implements Action {
    type:string = RETRIEVE_SEARCH_VIDEOS
    constructor(public payload:{data:VideoOne[]}){}
}

export class GetNewSearchVideos implements Action {
    type:string = GET_NEW_SEARCH_VIDEOS
    constructor(public payload:{page:number}){}
}

export class SendInfo implements Action {
    type:string = SEND_INFO
    constructor(public payload:{info:string}){}
}