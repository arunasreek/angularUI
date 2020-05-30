import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Cookies localStorage 
import { CookieService } from 'ngx-cookie-service';

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// component module
import { ComponentsModule } from './components/component.module';

//views module
import { ViewsModule } from './views/views.module';

//services module
import { ServicesModule } from './services/services.module';

//helpers module
import { HelpersModule } from './helpers/helpers.module';

//config module
import { AppConfigModule, AppConfig } from './config/app.config.module';

import { NotificationPopupComponent } from './components/common/notification-popup/notification-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    ViewsModule,
    ServicesModule,
    HelpersModule,
    AppConfigModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule
  ],
  providers: [AppConfig,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { } 