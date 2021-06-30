export interface SellerTaxonomyResponse {
  count: number;
  results: SellerTaxonomyResponseItem[];
}

export interface SellerTaxonomyResponseItem {
  id: number;
  level: number;
  name: string;
  parent_id: number;
  children: SellerTaxonomyResponseItem[];
  full_path_taxonomy_ids: number[];
}

export interface SellerTaxonomyPropertiesResponse {
  count: number;
  results: SellerTaxonomyPropertiesResponseItem[];
}

export interface SellerTaxonomyPropertiesResponseItem {
  property_id: number;
  name: string;
  display_name: string;
  scales: number[];
  is_required: boolean;
  supports_attributes: boolean;
  supports_variations: boolean;
  is_multivalued: boolean;
  possible_values: SellerTaxonomyPropertiesResponseItemValues[];
  selected_values: SellerTaxonomyPropertiesResponseItemValues[];
}

export interface SellerTaxonomyPropertiesResponseItemValues {
  value_id: number;
  name: string;
  scale_id: number;
  equal_to: number[];
}
