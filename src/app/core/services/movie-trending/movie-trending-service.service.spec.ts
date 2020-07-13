import { TestBed } from '@angular/core/testing';

import { MovieTrendingService } from './movie-trending.service';

describe('MovieTrendingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieTrendingService = TestBed.get(MovieTrendingService);
    expect(service).toBeTruthy();
  });
});
