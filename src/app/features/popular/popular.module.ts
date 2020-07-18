import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { PopularRoutingModule } from './popular-routing.module';
import { PopularComponent } from './popular.component';



@NgModule({
  declarations: [PopularComponent],
  imports: [
    CommonModule,
    SharedModule,
    PopularRoutingModule
  ]
})
export class PopularModule { }
