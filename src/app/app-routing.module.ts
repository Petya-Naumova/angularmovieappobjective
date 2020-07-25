import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { SetAuthentificationComponent } from './core/components/set-authentification/set-authentification.component';

const routes: Routes = [
  { path: 'set-authentification', component: SetAuthentificationComponent},
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
