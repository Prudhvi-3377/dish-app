import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './Auth/login/login';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomePage } from './Home/home-page/home-page';
import { EditPage } from './Home/edit-page/edit-page';
import { AddDish } from '../app/Home/add-dish/add-dish';
import { AuthInterceptor } from './Services/auth-interceptor';
@NgModule({
  declarations: [
    App,
    Login,
    HomePage,
    EditPage,
    AddDish
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {
      provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true

    }
  ],
  bootstrap: [App]
})
export class AppModule { }
