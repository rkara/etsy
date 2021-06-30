import { TestBed } from '@angular/core/testing';

import { EtsySellerTaxonomyService } from './seller-taxonomy.service';

describe('EtsySellerTaxonomyService', () => {
  let service: EtsySellerTaxonomyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtsySellerTaxonomyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
