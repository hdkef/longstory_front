import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoViewComponent } from './video-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    VideoViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:VideoViewComponent}
    ])
  ]
})
export class VideoViewModule { }
