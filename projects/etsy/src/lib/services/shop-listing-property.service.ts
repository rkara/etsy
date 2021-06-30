import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { EtsyListingPropertyContract } from '../models/shop-listing';
import { ETSY_API } from '../tokens/api';

@Injectable({
  providedIn: 'root',
})
export class EtsyShopListingPropertyService {
  constructor(
    private http: HttpClient,
    @Inject(ETSY_API) private api: string
  ) {}

  /**
   * Retrieves a listing's property
   * @param listingId The unique numeric ID for a listing in a specific shop.
   * @param propertyId The unique ID of an Etsy listing property.
   */
  getListingProperty$(listingId: number, propertyId: number) {
    const uri = `${this.api}/application/listings/${listingId}/properties/${propertyId}`;
    return this.http.get(uri).pipe(
      map((listing) => {
        debugger;
        // TODO: Define Interface
        return listing;
      }),
      catchError(() => of(undefined))
    );
  }

  /**
   * Get a listing's properties
   * @param shopId The unique positive non-zero numeric ID for an Etsy Shop.
   * @param listingId The unique numeric ID for a listing in a specific shop.
   */
  getListingProperties$(shopId: number, listingId: number) {
    const uri = `${this.api}/application/shops/${shopId}/listings/${listingId}/properties`;
    return this.http.get(uri).pipe(
      map((listings) => {
        debugger;
        // TODO: Define Interface
        return listings;
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Updates or populates properties for a Listing, which requires either values or value_ids.
   * @param contract
   */
  updateListingProperty$(contract: EtsyListingPropertyContract) {
    const uri = `${this.api}/application/shops/${contract.shopId}/listings/${contract.listingId}/properties/${contract.propertyId}`;
    const params: any = {};

    if (contract.valueIds) {
      params.value_ids = contract.valueIds;
    }
    if (contract.scaleId) {
      params.scale_id = contract.scaleId;
    }
    if (contract.values) {
      params.values = contract.values;
    }

    return this.http.put(uri, params).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  /**
   * Deletes a property for a Listing.
   * @param contract
   */
  deleteListingProperty$(contract: EtsyListingPropertyContract) {
    const uri = `${this.api}/application/shops/${contract.shopId}/listings/${contract.listingId}/properties/${contract.propertyId}`;
    return this.http.delete(uri, { observe: 'response' }).pipe(
      map((res) => res.status === 204),
      catchError((e) => of(false))
    );
  }
}
