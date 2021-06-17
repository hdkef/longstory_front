import { Component, OnInit } from '@angular/core';
import { VideosMock } from '../mock/videos';
import { VideoOne } from '../models/video-one';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private vidMock:VideosMock) { }

  videosforyou:Promise<VideoOne[]>
  videoshotspot:Promise<VideoOne[]>

  ngOnInit(): void {
    let vidmock = this.vidMock.videosMock
    this.videosforyou = new Promise((resolve,_)=>{
      resolve(vidmock)
    })
    this.videoshotspot = new Promise((resolve,_)=>{
      resolve(vidmock)
    })
  }

}
