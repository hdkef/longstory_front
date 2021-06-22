import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { VideoOne } from '../models/video-one';
import { AppState } from '../redux/reducers/app-reducer';
import {CheckCacheStart} from '../redux/actions/caching-action'
import * as constant from '../constant/constant'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  constructor(private store:Store<AppState>) { }

  videos:Promise<VideoOne[]>
  videoSubs:Subscription
  cachingSubs:Subscription
  page = 0

  ngOnDestroy(): void {
    if (this.cachingSubs){
      this.cachingSubs.unsubscribe()
    }
    if (this.videoSubs){
      this.videoSubs.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.videoSubs = this.store.select("video").subscribe((data)=>{
      console.log("searchVideos :", data)
      let searchVideos = data["searchVideos"]
      if (searchVideos){
        this.videos = new Promise((resolve,_)=>{
          resolve(searchVideos)
        })
      }
    })
  }

  paginate(val){
    let page = this.page + val
    this.store.dispatch(new CheckCacheStart({kind:constant.PAGING,object:constant.SEARCH_VIDEO,page:page,id:null}))
    this.cachingSubs = this.store.select("caching").subscribe((data)=>{
      this.page = data["curPageSearchVideos"]
    })
  }

}
