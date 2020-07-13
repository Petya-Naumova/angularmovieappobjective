import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
