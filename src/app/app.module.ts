import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { NavbarModule } from './navbar/navbar.module';
import { AuthEffect } from './redux/effects/auth-effect';
import { AppReducer } from './redux/reducers/app-reducer';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HttpClientModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([AuthEffect]),
    NoopAnimationsModule
  ],
  providers: [AuthGuard,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
