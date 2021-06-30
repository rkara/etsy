export interface EtsyActiveListingsContract {
  /**
   * The maximum number of results to return.
   * Range: 1-100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   */
  offset?: number;

  /**
   * Search term or phrase that must appear in all results.
   */
  keywords?: string;

  /**
   * The value to sort a search result of listings on.
   *
   * NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.).
   */
  sortOn?: 'created' | 'price';

  /**
   * The ascending(up) or descending(down) order to sort listings by.
   *
   * NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).
   */
  sortOrder?: 'asc' | 'ascending' | 'desc' | 'descending' | 'up' | 'down';

  /**
   * The minimum price of listings to be returned by a search result.
   */
  minimumPrice?: number;

  /**
   * The maximum price of listings to be returned by a search result.
   */
  maximumPrice?: number;

  /**
   * The numeric taxonomy ID of the listing.
   * The seller manages listing taxonomy IDs for their shop.
   */
  taxonomyId?: number;

  /**
   * Filters by shop location.
   *
   * If location cannot be parsed, Etsy responds with an error.
   */
  shopLocation?: string;
}

export interface EtsyActiveListingsByShopContract {
  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   */
  shopId: number;

  /**
   * The maximum number of results to return.
   * Range: 1-100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   */
  offset?: number;

  /**
   * Search term or phrase that must appear in all results.
   */
  keywords?: string;
}

export interface EtsyListingsByShopReceiptContract {
  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   */
  shopId: number;

  /**
   * The unique numeric ID for a receipt detailing a specific transaction.
   */
  receiptId: number;

  /**
   * The maximum number of results to return.
   * Range: 1-100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   */
  offset?: number;
}

export interface EtsyListingsByShopSectionContract {
  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   */
  shopId: number;

  /**
   * The maximum number of results to return.
   * Range: 1-100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   */
  offset?: number;

  /**
   * The value to sort a search result of listings on.
   *
   * NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.).
   */
  sortOn?: 'created' | 'price';

  /**
   * The ascending(up) or descending(down) order to sort listings by.
   *
   * NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).
   */
  sortOrder?: 'asc' | 'ascending' | 'desc' | 'descending' | 'up' | 'down';
}

export interface EtsyListingPropertyContract {
  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   */
  shopId: number;

  /**
   * The unique numeric ID for a listing in a specific shop.
   */
  listingId: number;

  /**
   * The unique ID of an Etsy listing property.
   */
  propertyId: number;

  /**
   * An array of unique IDs of multiple Etsy listing property values.
   *
   * For example, if your listing offers different sizes of a product, then the value ID list contains value IDs for each size.
   */
  valueIds?: number[];

  /**
   * An array of value strings for multiple Etsy listing property values
   *
   * For example, if your listing offers different colored products, then the values array contains the color strings for each color.
   */
  values?: string[];

  /**
   * The numeric ID of a single Etsy.com measurement scale.
   */
  scaleId?: number;
}

export interface EtsyDraftListingContract {
  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   */
  shopId: number;

  /**
   * The positive non-zero number of products available for purchase in the listing. Note: The listing quantity is the sum of available offering quantities. You can request the quantities for individual offerings from the ListingInventory resource using the getListingInventory endpoint.
   */
  quantity: number;

  /**
   * The listing's title string. Valid title strings contain only letters, numbers, punctuation marks, mathematical symbols, whitespace characters, ™, ©, and ®. (regex: /[^\p{L}\p{Nd}\p{P}\p{Sm}\p{Zs}™©®]/u) You can only use the %, :, & and + characters once each.
   */
  title: string;

  /**
   * A description string of the product for sale in the listing.
   */
  description: string;

  /**
   * The positive non-zero price of the product. (Sold product listings are private) Note: The price is the minimum possible price. The getInventory method requests exact prices for available offerings.
   */
  price: number;

  /**
   * An enumerated string inidcated who made the product. Helps buyers locate the listing under the Handmade heading.
   */
  whoMade: 'i_did' | 'someone_else' | 'collective';

  /**
   * An enumerated string for the era in which the maker made the product in this listing. Helps buyers locate the listing under the Vintage heading.
   */
  whenMade:
    | 'made_to_order'
    | '2020_2021'
    | '2010_2019'
    | '2002_2009'
    | 'before_2002'
    | '2000_2001'
    | '1990s'
    | '1980s'
    | '1970s'
    | '1960s'
    | '1950s'
    | '1940s'
    | '1930s'
    | '1920s'
    | '1910s'
    | '1900s'
    | '1800s'
    | '1700s'
    | 'before_1700';

  /**
   * The numeric taxonomy ID of the listing. The seller manages listing taxonomy IDs for their shop. See SellerTaxonomy for more information.
   */
  taxonomyId: number;

  /**
   * The numeric ID of the shipping profile associated with the listing.
   */
  shippingProfileId: number;

  /**
   * A list of material strings for materials used in the product. Valid materials strings contain only letters, numbers, and whitespace characters. (regex: /[^\p{L}\p{Nd}\p{Zs}]/u) Default value is null.
   */
  materials?: string[];

  /**
   * The numeric ID of the shop section for this listing. Default value is null.
   */
  shopSectionId?: number;

  /**
   * The minimum number of days  to process this listing. Default value is null.
   */
  processingMin?: number;

  /**
   * The maximum number of days  to process this listing. Default value is null.
   */
  processingMax?: number;

  /**
   * A list of tag strings for the listing. Valid tag strings contain only letters, numbers, whitespace characters, -, ', ™, ©, and ®. (regex: /[^\p{L}\p{Nd}\p{Zs}-'™©®]/u) Default value is null.
   */
  tags?: string[];

  /**
   * An enumerated string indicating a person for whom this product would make an appropriate gift. Default value is null.
   */
  recipient?:
    | 'men'
    | 'women'
    | 'unisex_adults'
    | 'teen_boys'
    | 'teen_girls'
    | 'teens'
    | 'boys'
    | 'girls'
    | 'children'
    | 'baby_boys'
    | 'baby_girls'
    | 'babies'
    | 'birds'
    | 'cats'
    | 'dogs'
    | 'pets'
    | 'not_specified';

  /**
   * An enumerated string indicating an occassion for which this product would make an appropriate gift. Default value is null.
   */
  occasion?:
    | 'anniversary'
    | 'baptism'
    | 'bar_or_bat_mitzvah'
    | 'birthday'
    | 'canada_day'
    | 'chinese_new_year'
    | 'cinco_de_mayo'
    | 'confirmation'
    | 'christmas'
    | 'day_of_the_dead'
    | 'easter'
    | 'eid'
    | 'engagement'
    | 'fathers_day'
    | 'get_well'
    | 'graduation'
    | 'halloween'
    | 'hanukkah'
    | 'housewarming'
    | 'kwanzaa'
    | 'prom'
    | 'july_4th'
    | 'mothers_day'
    | 'new_baby'
    | 'new_years'
    | 'quinceanera'
    | 'retirement'
    | 'st_patricks_day'
    | 'sweet_16'
    | 'sympathy'
    | 'thanksgiving'
    | 'valentines'
    | 'wedding';

  /**
   * An array of style strings for this listing, each of which is free-form text string such as 'Formal', or 'Steampunk'. A Listing may have up to two styles. Valid style strings contain only letters, numbers, and whitespace characters. (regex: /[^\p{L}\p{Nd}\p{Zs}]/u) Default value is null.
   */
  styles?: string[];

  /**
   * The numeric weight of the product measured in units set in 'item_weight_unit'. Default value is null.
   */
  itemWeight?: number;

  /**
   * The numeric length of the product measured in units set in 'item_dimensions_unit'. Default value is null.
   */
  itemLength?: number;

  /**
   * The numeric width of the product measured in units set in 'item_dimensions_unit'. Default value is null.
   */
  itemWidth?: number;

  /**
   * The numeric height of the product measured in units set in 'item_dimensions_unit'. Default value is null.
   */
  itemHeight?: number;

  /**
   * A string defining the units used to measure the weight of the product. Default value is null.
   */
  itemWeightUnit?: 'oz' | 'lb' | 'g' | 'kg';

  /**
   * A string defining the units used to measure the dimensions of the product. Default value is null.
   */
  itemDimensionsUnit?: 'in' | 'ft' | 'mm' | 'cm' | 'm' | 'yd' | 'inches';

  /**
   * When true, this listing is personalizable. The default value is null.
   */
  isPersonalizable?: boolean;

  /**
   * An array of numeric image IDs of the images in a listing, which can include up to 10 images.
   */
  imageIds?: number[];

  /**
   * When true, tags the listing as a supply product. Helps buyers locate the listing under the Supplies heading.
   */
  isSupply?: boolean;

  /**
   * When true, a buyer may contact the seller for a customized order. The default value is true when a shop accepts custom orders. Does not apply to shops that do not accept custom orders.
   */
  isCustomizable?: boolean;

  /**
   * When true, applicable shop tax rates apply to this listing at checkout.
   */
  isTaxable?: boolean;

  /**
   * When true, this is a private listing intendend for a specific buyer and hidden from shop view.
   */
  isPrivate?: boolean;
}

export interface EtsyListingsByShopContract {
  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   */
  shopId: number;

  /**
   * The maximum number of results to return.
   * Range: 1-100
   */
  limit?: number;

  /**
   * The number of records to skip before selecting the first result.
   */
  offset?: number;

  /**
   * The value to sort a search result of listings on.
   *
   * NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.).
   */
  sortOn?: 'created' | 'price';

  /**
   * The ascending(up) or descending(down) order to sort listings by.
   *
   * NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).
   */
  sortOrder?: 'asc' | 'ascending' | 'desc' | 'descending' | 'up' | 'down';
}

export interface EtsyListingContract {
  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   */
  shopId: number;

  /**
   * The unique numeric ID for a listing in a specific shop.
   */
  listingId: number;

  /**
   * The positive non-zero number of products available for purchase in the listing.
   */
  quantity?: number;

  /**
   * The positive non-zero price of the product. (Sold product listings are private)
   */
  price?: number;

  /**
   * The listing's title string.
   */
  title?: string;

  /**
   * A description string of the product for sale in the listing.
   */
  description?: string;

  /**
   * A list of material strings for materials used in the product.
   * Valid materials strings contain only letters, numbers, and whitespace characters.
   * (regex: /[^\p{L}\p{Nd}\p{Zs}]/u)
   * Default value is null.
   */
  materials?: string[];

  /**
   * When true, renews a listing for four months upon expriation.
   * If set to true when previously false, etsy.com renews the listing before it expires, but the renewal period starts immidiately rather than extending the listing's expiration date.
   * Any unused time remaining on the listing is lost.
   * Renewals result in charges to a user's bill.
   */
  shouldAutoRenew?: boolean;

  /**
   * The numeric ID of the shipping profile associated with the listing.
   */
  shippingProfileId?: number;

  /**
   * The numeric ID of the shop section for this listing. Default value is null.
   */
  shopSectionId?: number;

  /**
   * The numeric weight of the product measured in units set in 'item_weight_unit'.
   * Default value is null.
   */
  itemWeight?: number;

  /**
   * The numeric length of the product measured in units set in 'item_dimensions_unit'.
   * Default value is null.
   */
  itemLength?: number;

  /**
   * The numeric height of the product measured in units set in 'item_dimensions_unit'.
   * Default value is null.
   */
  itemWidth?: number;

  /**
   * The numeric height of the product measured in units set in 'item_dimensions_unit'. Default value is null.
   */
  itemHeight?: number;

  /**
   * A string defining the units used to measure the weight of the product. Default value is null.
   */
  itemWeightUnit?: 'oz' | 'lb' | 'g' | 'kg';

  /**
   * A string defining the units used to measure the dimensions of the product. Default value is null.
   */
  itemDimensionsUnit?: 'in' | 'ft' | 'mm' | 'cm' | 'm' | 'yd' | 'inches';

  /**
   * When true, applicable shop tax rates apply to this listing at checkout.
   */
  isTaxable?: boolean;

  /**
   * The numeric taxonomy ID of the listing. The seller manages listing taxonomy IDs for their shop. See SellerTaxonomy for more information.
   */
  taxonomyId?: number;

  /**
   * A list of tag strings for the listing. Valid tag strings contain only letters, numbers, whitespace characters, -, ', ™, ©, and ®. (regex: /[^\p{L}\p{Nd}\p{Zs}-'™©®]/u) Default value is null.
   */
  tags?: string[];

  /**
   * An enumerated string inidcated who made the product. Helps buyers locate the listing under the Handmade heading.
   */
  whoMade?: 'i_did' | 'someone_else' | 'collective';

  /**
   * An enumerated string for the era in which the maker made the product in this listing. Helps buyers locate the listing under the Vintage heading.
   */
  whenMade?:
    | 'made_to_order'
    | '2020_2021'
    | '2010_2019'
    | '2002_2009'
    | 'before_2002'
    | '2000_2001'
    | '1990s'
    | '1980s'
    | '1970s'
    | '1960s'
    | '1950s'
    | '1940s'
    | '1930s'
    | '1920s'
    | '1910s'
    | '1900s'
    | '1800s'
    | '1700s'
    | 'before_1700';

  /**
   * The positive non-zero numeric position in the featured listings of the shop, with rank 1 listings appearing in the left-most position in featured listing on a shop’s home page.
   */
  featuredRank?: number;

  /**
   * When true, this listing is personalizable. The default value is null.
   */
  isPersonalizable?: boolean;

  /**
   * When true, this is a private listing intendend for a specific buyer and hidden from shop view.
   */
  isPrivate?: boolean;

  /**
   * When true, etsy.com publishes the listing. False does not publish the listing.
   */
  publish?: boolean;

  /**
   * An enumerated type string that indicates whether the listing is physical or a digital download.
   */
  type?: 'physical' | 'download' | 'both';

  /**
   * An enumerated string from any of: active, removed, sold_out, expired, alchemy, edit, create, private, or unavailable.
   */
  state?: 'active' | 'inactive' | 'sold_out' | 'draft' | 'removed' | 'expired';

  /**
   * An array of enumerated channel ID strings. A channel is a venue for sellers to reach buyers in order to make sales.
   */
  channels?: ('etsy.com' | 'wholesale' | 'pattern' | 'sell_on_facebook')[];
}
