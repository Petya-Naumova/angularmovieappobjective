import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    SharedModule,
    HomePageRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
