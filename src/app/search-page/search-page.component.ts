import { Component, OnInit } from '@angular/core';
import { VideosMock } from '../mock/videos';
import { VideoOne } from '../models/video-one';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private vidMock:VideosMock) { }

  videos:Promise<VideoOne[]>

  ngOnInit(): void {
    let vidmock = this.vidMock.videosMock
    vidmock.pop()
    this.videos = new Promise((resolve,_)=>{
      resolve(vidmock)
    })
  }

}
