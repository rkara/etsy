import { TestBed } from '@angular/core/testing';

import { EtsyUserService } from './user.service';

describe('EtsyUserService', () => {
  let service: EtsyUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtsyUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
