import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, withLatestFrom } from "rxjs/operators";
import * as constant from "src/app/constant/constant";
import { VideosMock } from "src/app/mock/videos";
import * as fromCachingAction from '../actions/caching-action'
import * as fromVideoAction from '../actions/video-action'
import { AppState } from "../reducers/app-reducer";

@Injectable()
export class CachingEffect {
    constructor(private action$:Actions, private store:Store<AppState>, private vidMock:VideosMock){}

    checkCacheStart = createEffect(()=>{
        return this.action$.pipe(
            ofType(fromCachingAction.CHECK_CACHE_START),
            switchMap((action:fromCachingAction.CheckCacheStart)=>{
                switch(action.payload.kind){
                    case constant.PAGING:
                        return of(new fromCachingAction.CheckCachePaging({
                            object:action.payload.object,
                            page:action.payload.page,
                        }))
                    case constant.SINGLE_OBJECT:
                        return of(new fromCachingAction.CheckCacheSingleObject({
                            object:action.payload.object,
                            id:action.payload.id,
                        }))
                }
            })
        )
    })

    checkCachePaging = createEffect(()=>{
        return this.action$.pipe(
            ofType(fromCachingAction.CHECK_CACHE_PAGING),
            withLatestFrom(this.store.select("caching")),
            switchMap((value)=>{

                let action:fromCachingAction.CheckCachePaging = value[0]
                let state = value[1]

                switch (action.payload.object){
                    case constant.SEARCH_VIDEO:
                        let caches = this.getCachePaging(state.searchVideos,action.payload.page,state.totalSearchVideos)
                        if (caches){
                            return of(new fromVideoAction.RetrieveSearchVideos({videos:caches}))
                        }else{
                            return of(new fromVideoAction.GetNewSearchVideos({page:action.payload.page}))
                        }
                }
            })
        )
    })

    getCachePaging = (data:any,page:number,totalpage:number) => {
        //TOBEIMPLEMENTED
        //IS IT POSSIBLE TO GET DATA FROM CACHE
        //IF IT IS, RETURN DATA
        let a = this.vidMock.createVideomock("id_cache","","thumbnail_cache","usrid_cache","username_cache","avatar_url_cache")
        return [a,a,a,a,a]
    }

    AddNewCachePaging = createEffect(()=>{
        return this.action$.pipe(
            ofType(fromCachingAction.ADD_NEW_CACHE_PAGING),
            switchMap((action:fromCachingAction.AddNewCachePaging)=>{
                switch (action.payload.object){
                    case constant.SEARCH_VIDEO:
                        return of(new fromCachingAction.AddNewSearchVideos({
                            totalpage:action.payload.totalpage,
                            data:action.payload.data,
                        }))
                }
            })
        )
    })


}