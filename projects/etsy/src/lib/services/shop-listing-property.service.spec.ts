import { TestBed } from '@angular/core/testing';

import { EtsyShopListingPropertyService } from './shop-listing-property.service';

describe('EtsyShopListingPropertyService', () => {
  let service: EtsyShopListingPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtsyShopListingPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
