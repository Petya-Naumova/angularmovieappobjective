import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutComponent },

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
