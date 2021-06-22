import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { GqlService } from "src/app/gql.service";
import * as fromVideoAction from '../actions/video-action'
import {AddNewCachePaging} from '../actions/caching-action'
import * as constant from '../../constant/constant'
import { Store } from "@ngrx/store";
import { AppState } from "../reducers/app-reducer";

@Injectable()
export class VideoEffect {
    constructor(private action$:Actions, private gql:GqlService, private store:Store<AppState>){}

    GetNewSearchVideos = createEffect(()=>{
        return this.action$.pipe(
            ofType(fromVideoAction.GET_NEW_SEARCH_VIDEOS),
            withLatestFrom(this.store.select("caching")),
            switchMap((value)=>{
                let action:fromVideoAction.GetNewSearchVideos = value[0]
                let state = value[1]
                let lastid = this.getLastID(state.searchVideos)
                
                let query = `query hotspotvideos($id:ID!){
                    hotspotvideos(id:$id){
                        id
                        thumbnail
                        title
                        videolink
                        user {
                            id
                            username
                            avatarurl
                        }
                    }
                }`
                let payload = JSON.stringify(
                    {
                        query,
                        variables:{"id":lastid},
                    }
                )

                return this.gql.fetch(payload).pipe(
                    map((res)=>{
                        let videos = res["data"]["hotspotvideos"]
                        console.log("gql fetch map, ",videos)
                        new fromVideoAction.RetrieveSearchVideos({data:videos})
                        return new AddNewCachePaging({
                            object:constant.SEARCH_VIDEO,
                            totalpage:action.payload.page,
                            data:videos,
                        })
                    }),
                    catchError((err)=>{
                        return of(new fromVideoAction.SendInfo({info:""}))
                    })
                )
            })
        )
    })


    getLastID = (data:any[])=>{
        if (data){
            return data[data.length-1].id
        }
        return "NO_ID"
    }
}