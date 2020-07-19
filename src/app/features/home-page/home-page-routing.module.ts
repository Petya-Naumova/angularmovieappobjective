import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [

  { path: 'popular', loadChildren: () => import('../popular/popular.module').then(m => m.PopularModule) },
  { path: 'top-rated', loadChildren: () => import('../top-rated/top-rated.module').then(m => m.TopRatedModule) },
  { path: '', component: HomePageComponent, redirectTo: '', pathMatch: 'full' }
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
export class HomePageRoutingModule { }
