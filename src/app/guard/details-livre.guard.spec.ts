import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { detailsLivreGuard } from './details-livre.guard';

describe('detailsLivreGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => detailsLivreGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
