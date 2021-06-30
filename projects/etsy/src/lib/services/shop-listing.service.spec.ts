import { TestBed } from '@angular/core/testing';

import { EtsyShopListingService } from './shop-listing.service';

describe('EtsyShopListingService', () => {
  let service: EtsyShopListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtsyShopListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
