export interface EtsySellerTaxonomyNode {
  id: number;
  level: number;
  name: string;
  parentId: number;
  children: EtsySellerTaxonomyNode[];
  fullPathTaxonomyIds: number[];
}

export interface EtsySellerTaxonomyProperty {
  propertyId: number;
  name: string;
  displayName: string;
  scales: number[];
  isRequired: boolean;
  supportsAttributes: boolean;
  supportsVariations: boolean;
  isMultiValued: boolean;
  possibleValues: EtsySellerTaxonomyPropertyItem[];
  selectedValues: EtsySellerTaxonomyPropertyItem[];
}

export interface EtsySellerTaxonomyPropertyItem {
  valueId: number;
  name: string;
  scaleId: number;
  equalTo: number[];
}
