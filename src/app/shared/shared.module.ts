import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MovieComponent } from './components/movie/movie-component.component';

@NgModule({
  declarations: [
    MovieComponent
  ],
  exports: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
