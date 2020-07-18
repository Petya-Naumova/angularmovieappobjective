import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { TopRatedRoutingModule } from './top-rated-routing.module';
import { TopRatedComponent } from './top-rated.component';


@NgModule({
  declarations: [TopRatedComponent],
  imports: [
    SharedModule,
    TopRatedRoutingModule
  ]
})
export class TopRatedModule { }
