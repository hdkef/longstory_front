import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  constructor() { }

  FALSE_DESC_CAPT = "show video description"
  TRUE_DESC_CAPT = "hide video description"
  showDesc = {caption:this.FALSE_DESC_CAPT,value:false}

  ngOnInit(): void {
  }

  toggleDesc(){
    if (this.showDesc.caption == this.FALSE_DESC_CAPT){
      this.showDesc.caption = this.TRUE_DESC_CAPT
    }else{
      this.showDesc.caption = this.FALSE_DESC_CAPT
    }
    this.showDesc.value = !this.showDesc.value
  }

}
