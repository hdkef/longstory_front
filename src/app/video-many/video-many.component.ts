import { Component, OnInit } from '@angular/core';
import { VideosMock } from '../mock/videos';
import { VideoOne } from '../models/video-one';

@Component({
  selector: 'app-video-many',
  templateUrl: './video-many.component.html',
  styleUrls: ['./video-many.component.css']
})
export class VideoManyComponent implements OnInit {

  constructor(private mockVideos:VideosMock) { }

  videos:Promise<VideoOne[]>
  ngOnInit(): void {
    let videomock = this.mockVideos.videosMock
    this.videos = new Promise((resolve,_)=>{
      resolve(videomock)
    })
  }

}
