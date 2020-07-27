import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { LoginModule } from './features/login/login.module';
import { LoginRoutingModule } from './features/login/login-routing.module';

import { DashboardModule } from './features/dashboard/dashboard.module';
import { DashboardRoutingModule } from './features/dashboard/dashboard-routing.module';

import { AboutModule } from './features/about/about.module';
import { AboutRoutingModule } from './features/about/about-routing.module';

import { NotLoggedHomePageModule } from './features/notloggedhomepage/not-logged-home-page.module';
import { NotLoggedHomePageRoutingModule } from './features/notloggedhomepage/not-logged-home-page-routing.module';

import { SearchModule } from './features/search/search.module';

import { PageNotFoundModule } from './core/components/page-not-found/page-not-found.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    LoginModule,
    LoginRoutingModule,
    DashboardModule,
    DashboardRoutingModule,
    AboutModule,
    AboutRoutingModule,
    NotLoggedHomePageModule,
    NotLoggedHomePageRoutingModule,
    SearchModule,
    PageNotFoundModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
