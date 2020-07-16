import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopRatedComponent } from './top-rated.component';

const routes: Routes = [
  { path: 'top-rated', component: TopRatedComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TopRatedRoutingModule { }
