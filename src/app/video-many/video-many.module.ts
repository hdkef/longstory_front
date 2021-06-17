import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoManyComponent } from './video-many.component';
import { VideoOneModule } from '../video-one/video-one.module';



@NgModule({
  declarations: [
    VideoManyComponent
  ],
  imports: [
    CommonModule,
    VideoOneModule,
  ],
  exports: [
    VideoManyComponent
  ]
})
export class VideoManyModule { }
