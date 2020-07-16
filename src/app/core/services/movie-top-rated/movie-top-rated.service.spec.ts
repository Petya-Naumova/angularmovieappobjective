import { TestBed } from '@angular/core/testing';

import { MovieTopRatedService } from './movie-top-rated.service';

describe('MovieTopRatedService', () => {
  let service: MovieTopRatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTopRatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
