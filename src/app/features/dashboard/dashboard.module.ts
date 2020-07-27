import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import {SearchModule} from "../search/search.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        DashboardRoutingModule,
        SharedModule,
        SearchModule
    ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
