import { TestBed } from '@angular/core/testing';

import { AuntenticadoGuard } from './auntenticado.guard';

describe('AuntenticadoGuard', () => {
  let guard: AuntenticadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuntenticadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
