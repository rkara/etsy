import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  EtsyActiveListingsByShopContract,
  EtsyActiveListingsContract,
  EtsyDraftListingContract,
  EtsyListingContract,
  EtsyListingsByShopContract,
  EtsyListingsByShopReceiptContract,
  EtsyListingsByShopSectionContract,
} from '../models/shop-listing';
import { ETSY_API } from '../tokens/api';

@Injectable({
  providedIn: 'root',
})
export class EtsyShopListingService {
  constructor(
    private http: HttpClient,
    @Inject(ETSY_API) private api: string
  ) {}

  /**
   * Creates a physical draft listing product in a shop on the Etsy channel.
   * @param contract
   */
  createDraftListing$(contract: EtsyDraftListingContract) {
    const uri = `${this.api}/application/shops/${contract.shopId}/listings`;
    const params: any = {
      quantity: contract.quantity,
      title: contract.title,
      description: contract.description,
      price: contract.price,
      who_made: contract.whoMade,
      when_made: contract.whenMade,
      taxonomy_id: contract.taxonomyId,
      shipping_profile_id: contract.shippingProfileId,
    };
    if (contract.materials) {
      params.materials = contract.materials;
    }
    if (contract.shopSectionId) {
      params.shop_section_id = contract.shopSectionId;
    }
    if (contract.processingMin) {
      params.processing_min = contract.processingMin;
    }
    if (contract.processingMax) {
      params.processing_max = contract.processingMax;
    }
    if (contract.tags) {
      params.tags = contract.tags;
    }
    if (contract.recipient) {
      params.recipient = contract.recipient;
    }
    if (contract.occasion) {
      params.occasion = contract.occasion;
    }
    if (contract.styles) {
      params.styles = contract.styles;
    }
    if (contract.itemWeight) {
      params.item_weight = contract.itemWeight;
    }
    if (contract.itemLength) {
      params.item_length = contract.itemLength;
    }
    if (contract.itemWidth) {
      params.item_width = contract.itemWidth;
    }
    if (contract.itemHeight) {
      params.item_height = contract.itemHeight;
    }
    if (contract.itemWeightUnit) {
      params.item_weight_unit = contract.itemWeightUnit;
    }
    if (contract.itemDimensionsUnit) {
      params.item_dimensions_unit = contract.itemDimensionsUnit;
    }
    if (contract.isPersonalizable) {
      params.is_personalizable = contract.isPersonalizable;
    }
    if (contract.imageIds) {
      params.image_ids = contract.imageIds;
    }
    if (contract.isSupply) {
      params.is_supply = contract.isSupply;
    }
    if (contract.isCustomizable) {
      params.is_customizable = contract.isCustomizable;
    }
    if (contract.isTaxable) {
      params.is_taxable = contract.isTaxable;
    }
    if (contract.isPrivate) {
      params.is_private = contract.isPrivate;
    }

    return this.http.post(uri, params, { observe: 'response' }).pipe(
      map((res) => res.status === 201),
      catchError((e) => of(false))
    );
  }

  /**
   * Endpoint to list Listings that belong to a Shop. Listings can be filtered using the 'state' param.
   * @param contract
   */
  getListingsByShop$(contract: EtsyListingsByShopContract) {
    const uri = `${this.api}/application/shops/${contract.shopId}/listings`;
    const params: any = {};

    if (contract.limit) {
      params.limit = contract.limit;
    }
    if (contract.offset) {
      params.offset = contract.offset;
    }
    if (contract.sortOn) {
      params.sort_on = contract.sortOn;
    }
    if (contract.sortOrder) {
      params.sort_order = contract.sortOrder;
    }
    return this.http.get(uri, { params }).pipe(
      map((listings) => {
        debugger;
        // TODO: Define Interface
        return listings;
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Retrieves a listing record by listing ID.
   * @param listingId The unique numeric ID for a listing in a specific shop.
   */
  getListing$(listingId: number) {
    const uri = `${this.api}/application/listings/${listingId}`;
    return this.http.get(uri).pipe(
      map((listings) => {
        debugger;
        // TODO: Define Interface
        return listings;
      }),
      catchError(() => of(undefined))
    );
  }

  /**
   * A list of all active listings on Etsy paginated by their creation date.
   * Without sort_order listings will be returned newest-first by default.
   * @param contract
   */
  findAllListingsActive$(contract: EtsyActiveListingsContract) {
    const uri = `${this.api}/application/listings/active`;

    const params: any = {};

    if (contract.limit) {
      params.limit = contract.limit;
    }

    if (contract.offset) {
      params.offset = contract.offset;
    }

    if (contract.keywords) {
      params.keywords = contract.keywords;
    }

    if (contract.sortOn) {
      params.sort_on = contract.sortOn;
    }

    if (contract.sortOrder) {
      params.sort_order = contract.sortOrder;
    }

    if (contract.minimumPrice) {
      params.minimum_price = contract.minimumPrice;
    }

    if (contract.maximumPrice) {
      params.maximum_price = contract.maximumPrice;
    }

    if (contract.taxonomyId) {
      params.taxonomy_id = contract.taxonomyId;
    }

    if (contract.shopLocation) {
      params.shop_location = contract.shopLocation;
    }

    return this.http.get(uri, params).pipe(
      map((listings) => {
        debugger;
        // TODO: Define Interface
        return listings;
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Retrieves a list of all active listings on Etsy in a specific shop, paginated by listing creation date.
   * @param contract
   */
  findAllActiveListingsByShop$(contract: EtsyActiveListingsByShopContract) {
    const uri = `${this.api}/application/shops/${contract.shopId}/listings/active`;
    const params: any = {};

    if (contract.limit) {
      params.limit = contract.limit;
    }

    if (contract.offset) {
      params.offset = contract.offset;
    }

    if (contract.keywords) {
      params.keywords = contract.keywords;
    }

    return this.http.get(uri, params).pipe(
      map((listings) => {
        debugger;
        // TODO: Define Interface
        return listings;
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Allows to query multiple listing ids at once.
   * @param contract
   */
  getListingsByListingIds$(listingIds: number[]) {
    const uri = `${this.api}/application/listings/batch`;
    const params: any = {};
    params.listing_ids = listingIds;
    return this.http.get(uri, params).pipe(
      map((listings) => {
        debugger;
        // TODO: Define Interface
        return listings;
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Gets all listings associated with a receipt.
   * @param contract
   */
  getListingsByShopReceipt$(contract: EtsyListingsByShopReceiptContract) {
    const uri = `${this.api}/application/shops/${contract.shopId}/receipts/${contract.receiptId}/listings`;
    const params: any = {};

    if (contract.limit) {
      params.limit = contract.limit;
    }

    if (contract.offset) {
      params.offset = contract.offset;
    }

    return this.http.get(uri, params).pipe(
      map((listings) => {
        debugger;
        // TODO: Define Interface
        return listings;
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Fetch all Listings within a Shop's ShopSection.
   * @param contract
   */
  getListingsByShopSectionId$(contract: EtsyListingsByShopSectionContract) {
    const uri = `${this.api}/application/shops/${contract.shopId}/shop-sections/listings`;
    const params: any = {};

    if (contract.limit) {
      params.limit = contract.limit;
    }

    if (contract.offset) {
      params.offset = contract.offset;
    }

    if (contract.sortOn) {
      params.sort_on = contract.sortOn;
    }

    if (contract.sortOrder) {
      params.sort_order = contract.sortOrder;
    }

    return this.http.get(uri, params).pipe(
      map((listings) => {
        debugger;
        // TODO: Define Interface
        return listings;
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Retrieves Listings associated to a Shop that are featured.
   * @param contract
   */
  getFeaturedListingsByShop$(contract: EtsyActiveListingsByShopContract) {
    const uri = `${this.api}/application/shops/${contract.shopId}/listings/featured`;
    const params: any = {};

    if (contract.limit) {
      params.limit = contract.limit;
    }

    if (contract.offset) {
      params.offset = contract.offset;
    }

    return this.http.get(uri, params).pipe(
      map((listings) => {
        debugger;
        // TODO: Define Interface
        return listings;
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Updates a listing, identified by a listing ID, for a specific shop identified by a shop ID.
   * @param contract
   */
  updateListing$(contract: EtsyListingContract) {
    const uri = `${this.api}/application/shops/${contract.shopId}/listings/${contract.listingId}`;
    const params: any = {};

    if (contract.quantity) {
      params.quantity = contract.quantity;
    }

    if (contract.price) {
      params.price = contract.price;
    }

    if (contract.title) {
      params.title = contract.title;
    }

    if (contract.description) {
      params.description = contract.description;
    }

    if (contract.materials) {
      params.materials = contract.materials;
    }

    if (contract.shouldAutoRenew) {
      params.should_auto_renew = contract.shouldAutoRenew;
    }

    if (contract.shippingProfileId) {
      params.shipping_profile_id = contract.shippingProfileId;
    }

    if (contract.shopSectionId) {
      params.shop_section_id = contract.shopSectionId;
    }

    if (contract.itemWeight) {
      params.item_weight = contract.itemWeight;
    }

    if (contract.itemLength) {
      params.item_length = contract.itemLength;
    }

    if (contract.itemWidth) {
      params.item_width = contract.itemWidth;
    }

    if (contract.itemHeight) {
      params.item_height = contract.itemHeight;
    }

    if (contract.itemWeightUnit) {
      params.item_weight_unit = contract.itemWeightUnit;
    }

    if (contract.itemDimensionsUnit) {
      params.item_dimensions_unit = contract.itemDimensionsUnit;
    }

    if (contract.isTaxable) {
      params.is_taxable = contract.isTaxable;
    }

    if (contract.taxonomyId) {
      params.taxonomy_id = contract.taxonomyId;
    }

    if (contract.tags) {
      params.tags = contract.tags;
    }

    if (contract.whoMade) {
      params.who_made = contract.whoMade;
    }

    if (contract.whenMade) {
      params.when_made = contract.whenMade;
    }

    if (contract.featuredRank) {
      params.featured_rank = contract.featuredRank;
    }

    if (contract.isPersonalizable) {
      params.is_personalizable = contract.isPersonalizable;
    }

    if (contract.isPrivate) {
      params.is_private = contract.isPrivate;
    }

    if (contract.publish) {
      params.publish = contract.publish;
    }

    if (contract.type) {
      params.type = contract.type;
    }

    if (contract.state) {
      params.state = contract.state;
    }

    if (contract.channels) {
      params.channels = contract.channels;
    }

    return this.http.put(uri, params).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  /**
   * Open API V3 endpoint to delete a ShopListing.
   *
   * A ShopListing can be deleted only if the state is one of the following:
   * * SOLD_OUT
   * * DRAFT
   * * EXPIRED
   * * INACTIVE
   * * ACTIVE
   *
   * and is_available or ACTIVE and has seller flags:
   * * SUPRESSED (frozen),
   * * VACATION,
   * * CUSTOM_SHOPS (pattern),
   * * SELL_ON_FACEBOOK.
   * @param listingId The unique numeric ID for a listing in a specific shop.
   */
  deleteListing$(listingId: number) {
    const uri = `${this.api}/application/listings/${listingId}`;
    return this.http.delete(uri, { observe: 'response' }).pipe(
      map((res) => res.status === 204),
      catchError((e) => of(false))
    );
  }
}
