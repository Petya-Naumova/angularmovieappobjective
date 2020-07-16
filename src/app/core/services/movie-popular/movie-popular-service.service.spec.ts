import { TestBed } from '@angular/core/testing';

import { MoviePopularService } from './movie-popular.service';

describe('MoviePopularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviePopularService = TestBed.get(MoviePopularService);
    expect(service).toBeTruthy();
  });
});
