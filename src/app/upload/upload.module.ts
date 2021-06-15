import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:UploadComponent}
    ])
  ]
})
export class UploadModule { }
