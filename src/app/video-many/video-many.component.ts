import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { VideoOne } from '../models/video-one';

@Component({
  selector: 'app-video-many',
  templateUrl: './video-many.component.html',
  styleUrls: ['./video-many.component.css']
})
export class VideoManyComponent implements OnChanges {

  constructor() { }

  @Input()videos:VideoOne[]
  videosAsync:Promise<VideoOne[]>
  
  ngOnChanges(changes: SimpleChanges): void {
    let videos = this.videos
    if (videos){
      this.videosAsync = new Promise((resolve,_)=>{
        resolve(videos)
      })
    }
  }
}
