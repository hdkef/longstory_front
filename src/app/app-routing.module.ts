import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadChildren:()=>{
    return import('./login/login.module').then((m)=>{return m.LoginModule})
  }},
  {path:'register',loadChildren:()=>{
    return import('./register/register.module').then((m)=>{return m.RegisterModule})
  }},
  {path:'setting',component:BasicLayoutComponent,loadChildren:()=>{
    return import('./setting/setting.module').then((m)=>{return m.SettingModule})
  }},
  {path:'upload',component:BasicLayoutComponent,loadChildren:()=>{
    return import('./upload/upload.module').then((m)=>{return m.UploadModule})
  }},
  {path:'view',component:BasicLayoutComponent,loadChildren:()=>{
    return import('./video-view/video-view.module').then((m)=>{return m.VideoViewModule})
  }},
  {path:'home',component:BasicLayoutComponent,loadChildren:()=>{
    return import('./home/home.module').then((m)=>{return m.HomeModule})
  }},
  {path:'search',component:BasicLayoutComponent,loadChildren:()=>{
    return import('./search-page/search-page.module').then((m)=>{return m.SearchPageModule})
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
