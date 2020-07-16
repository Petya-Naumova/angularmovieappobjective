import { NgModule } from '@angular/core';
import { PopularComponent } from './popular.component';
import { PopularRoutingModule } from './popular-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [PopularComponent],
  imports: [
    SharedModule,
    PopularRoutingModule
  ]
})
export class PopularModule { }
