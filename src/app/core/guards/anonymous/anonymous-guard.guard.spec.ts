import { TestBed } from '@angular/core/testing';

import { AnonymousGuardGuard } from './anonymous-guard.guard';

describe('AnonymousGuardGuard', () => {
  let guard: AnonymousGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnonymousGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
