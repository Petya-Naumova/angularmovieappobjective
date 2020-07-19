import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ],
  entryComponents: [
    MovieDetailsComponent
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MovieComponent
  ]
})
export class SharedModule { }
