import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { NavbarModule } from './navbar/navbar.module';
import { AuthComponent } from './guard/auth/auth.component';
import { LoginComponent } from './guard/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    AuthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
