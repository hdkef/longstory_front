import { Action } from "@ngrx/store"
import { VideoOne } from "src/app/models/video-one"

export const CHECK_CACHE_START = "_Check Cache Start"
export const CHECK_CACHE_PAGING = "_Check Cache Paging"
export const CHECK_CACHE_SINGLE_OBJECT = "_Check Cache Single Object"
export const GET_CACHE_PAGING = "_Get Cache Paging Start"
export const GET_CACHE_SINGLE_OBJECT = "_Get Cache Single Object"
export const ADD_NEW_CACHE_PAGING = "_Add New Cache Paging"
export const ADD_NEW_SEARCH_VIDEOS = "_Add New Search Videos"
export const CURRENT_PAGE_SEARCH_VIDEOS = "_Current Page Search Videos"

export class CheckCacheStart implements Action {
    type:string = CHECK_CACHE_START
    constructor(public payload:{kind:string,object:string,page:number,id:string}){}
}

export class CheckCachePaging implements Action {
    type:string = CHECK_CACHE_PAGING
    constructor(public payload:{object:string,page:number}){}
}

export class CheckCacheSingleObject implements Action {
    type:string = CHECK_CACHE_SINGLE_OBJECT
    constructor(public payload:{object:string,id:string}){}
}

export class GetCachePaging implements Action {
    type:string = GET_CACHE_PAGING
    constructor(public payload:{page:number}){}
}

export class GetCacheSingleObject implements Action {
    type:string = GET_CACHE_SINGLE_OBJECT
    constructor(public payload:{id:number}){}
}

export class AddNewCachePaging implements Action {
    type:string = ADD_NEW_CACHE_PAGING
    constructor(public payload:{object:string,totalpage:number,data:any}){}
}

export class AddNewSearchVideos implements Action {
    type:string = ADD_NEW_SEARCH_VIDEOS
    constructor(public payload:{data:VideoOne[],page:number}){}
}

export class CurPageSearchVideos implements Action {
    type:string = CURRENT_PAGE_SEARCH_VIDEOS
    constructor(public payload:{page:number}){}
}