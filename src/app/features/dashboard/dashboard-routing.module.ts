import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../../core/guards/auth/auth.guard';

const routes: Routes = [

  { path: 'popular', loadChildren: () => import('../popular/popular.module').then(m => m.PopularModule) },
  { path: 'top-rated', loadChildren: () => import('../top-rated/top-rated.module').then(m => m.TopRatedModule) },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
