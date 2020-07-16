import { NgModule } from '@angular/core';
import { TopRatedComponent } from './top-rated.component';
import { SharedModule } from '../../shared/shared.module';
import { TopRatedRoutingModule } from './top-rated-routing.module';

@NgModule({
  declarations: [
    TopRatedComponent
  ],
  imports: [
    SharedModule,
    TopRatedRoutingModule
  ],
  exports: [
    TopRatedComponent
  ]
})
export class TopRatedModule { }
