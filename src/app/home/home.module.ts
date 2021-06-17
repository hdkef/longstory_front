import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { VideoManyModule } from '../video-many/video-many.module';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    VideoManyModule,
    RouterModule.forChild([
      {path:'',component:HomeComponent}
    ])
  ]
})
export class HomeModule { }
