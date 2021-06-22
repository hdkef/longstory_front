import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, withLatestFrom } from "rxjs/operators";
import * as constant from "src/app/constant/constant";
import { VideosMock } from "src/app/mock/videos";
import { VideoOne } from "src/app/models/video-one";
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

                if (action.payload.page <= 0){
                    return of(new fromVideoAction.SendInfo({info:"cannot < 0"}))
                }

                switch (action.payload.object){
                    case constant.SEARCH_VIDEO:
                        let caches:VideoOne[] = this.getCachePaging(state.searchVideos,action.payload.page,state.totalSearchVideos,6)
                        if (caches){
                            this.store.dispatch(new fromCachingAction.CurPageSearchVideos({page:action.payload.page}))
                            return of(new fromVideoAction.RetrieveSearchVideos({data:caches}))
                        }else{
                            return of(new fromVideoAction.GetNewSearchVideos({page:action.payload.page}))
                        }
                }
            })
        )
    })

    getCachePaging = (data:any[],page:number,totalpage:number,limit:number) => {
        if (page <= totalpage && data && page > 0){
            let firstObj = (page - 1) * limit
            let endObj = page * limit
            return data.slice(firstObj,endObj)
        }
        return null
    }

    AddNewCachePaging = createEffect(()=>{
        return this.action$.pipe(
            ofType(fromCachingAction.ADD_NEW_CACHE_PAGING),
            switchMap((action:fromCachingAction.AddNewCachePaging)=>{
                switch (action.payload.object){
                    case constant.SEARCH_VIDEO:
                        return of(new fromCachingAction.AddNewSearchVideos({
                            data:action.payload.data,
                            page:action.payload.totalpage,
                        }))
                }
            })
        )
    })


}