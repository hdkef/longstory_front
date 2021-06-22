import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
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
            switchMap((action:fromVideoAction.GetNewSearchVideos)=>{
                //TOBE IMPLEMENTED FETCH SEARCHVIDEOS DATA THEN
                //NEW RETRIEVE SEARCH VIDEOS AND RETURN OF NEW ADDNEWCACHEPAGING
                let query = ``
                return this.gql.fetch(query).pipe(
                    map((res)=>{
                        //TOBEMODIFIED
                        this.store.dispatch(new fromVideoAction.RetrieveSearchVideos({videos:res[""]}))
                        return new AddNewCachePaging({
                            object:constant.SEARCH_VIDEO,
                            totalpage:action.payload.page,
                            data:res[""],
                        })
                    }),
                    catchError((err)=>{
                        return of(new fromVideoAction.SendInfo({info:""}))
                    })
                )
            })
        )
    })
}