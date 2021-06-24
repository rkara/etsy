import { TestBed } from '@angular/core/testing';

import { EtsyAuthenticationService } from './authentication.service';

describe('EtsyAuthenticationService', () => {
  let service: EtsyAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtsyAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
