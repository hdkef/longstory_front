import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { RouterModule } from '@angular/router';
import { PaginatorModule } from '../paginator/paginator.module';
import { VideoManyModule } from '../video-many/video-many.module';



@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    VideoManyModule,
    RouterModule.forChild([
      {path:'',component:SearchPageComponent}
    ])
  ]
})
export class SearchPageModule { }
