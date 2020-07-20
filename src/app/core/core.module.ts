import {NgModule, Optional, SkipSelf} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MoviePopularService } from './services/movie-popular/movie-popular.service';
import { MovieTopRatedService } from './services/movie-top-rated/movie-top-rated.service';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    SharedModule,
    CommonModule,
  ],
  providers: [
    MoviePopularService,
    MovieTopRatedService,
    httpInterceptorProviders
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
