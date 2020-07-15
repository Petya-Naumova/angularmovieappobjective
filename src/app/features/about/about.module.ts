import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    AboutRoutingModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
