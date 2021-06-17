import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoViewComponent } from './video-view.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    VideoViewComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    MatButtonModule,
    RouterModule.forChild([
      {path:'',component:VideoViewComponent}
    ])
  ]
})
export class VideoViewModule { }
