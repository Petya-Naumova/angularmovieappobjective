import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotLoggedHomePageRoutingModule } from './not-logged-home-page-routing.module';
import { NotLoggedHomepageComponent } from './not-logged-homepage.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [NotLoggedHomepageComponent],
  imports: [
    CommonModule,
    NotLoggedHomePageRoutingModule,
    SharedModule
  ],
  exports: [
    NotLoggedHomepageComponent
  ]
})
export class NotLoggedHomePageModule { }
