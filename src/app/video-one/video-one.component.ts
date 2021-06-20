import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { VideoOne } from '../models/video-one';

@Component({
  selector: 'app-video-one',
  templateUrl: './video-one.component.html',
  styleUrls: ['./video-one.component.css']
})
export class VideoOneComponent implements OnChanges {

  @Input()video:VideoOne
  videoAsync:Promise<VideoOne>
  constructor(private router:Router) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    let video =this.video
    if (video){
      this.videoAsync = new Promise((resolve,_)=>{
        resolve(video)
      })
    }
  }

  goView(){
    this.router.navigate(['/view'],{queryParams:{ID:this.video.id}})
  }

  

}
