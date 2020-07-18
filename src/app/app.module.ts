import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomePageRoutingModule } from './features/home-page/home-page-routing.module';

import { HomePageModule } from './features/home-page/home-page.module';
import { AboutModule } from './features/about/about.module';
import { PageNotFoundModule } from './core/components/page-not-found/page-not-found.module';
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
    HomePageRoutingModule,
    HomePageModule,
    AboutModule,
    PageNotFoundModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
