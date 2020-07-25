import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NotLoggedHomepageComponent} from './not-logged-homepage.component';

const routes: Routes = [
  { path: '', component: NotLoggedHomepageComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NotLoggedHomePageRoutingModule { }
