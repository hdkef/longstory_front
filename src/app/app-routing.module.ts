import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadChildren:()=>{
    return import('./login/login.module').then((m)=>{return m.LoginModule})
  }},
  {path:'register',loadChildren:()=>{
    return import('./register/register.module').then((m)=>{return m.RegisterModule})
  }},
  {path:'setting',loadChildren:()=>{
    return import('./setting/setting.module').then((m)=>{return m.SettingModule})
  }},
  {path:'upload',loadChildren:()=>{
    return import('./upload/upload.module').then((m)=>{return m.UploadModule})
  }},
  {path:'view',loadChildren:()=>{
    return import('./video-view/video-view.module').then((m)=>{return m.VideoViewModule})
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
