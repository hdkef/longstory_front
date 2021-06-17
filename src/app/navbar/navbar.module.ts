import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SearchModule } from '../search/search.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    RouterModule,
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
