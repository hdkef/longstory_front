import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoOneComponent } from './video-one.component';



@NgModule({
  declarations: [
    VideoOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VideoOneComponent
  ]
})
export class VideoOneModule { }
