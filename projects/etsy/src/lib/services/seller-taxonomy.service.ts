import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  SellerTaxonomyResponse,
  SellerTaxonomyPropertiesResponse,
  SellerTaxonomyResponseItem,
  SellerTaxonomyPropertiesResponseItemValues,
} from '../models/api/seller-taxonomy';
import {
  EtsySellerTaxonomyNode,
  EtsySellerTaxonomyProperty,
} from '../models/seller-taxonomy';
import { ETSY_API } from '../tokens/api';

@Injectable({
  providedIn: 'root',
})
export class EtsySellerTaxonomyService {
  constructor(
    private http: HttpClient,
    @Inject(ETSY_API) private api: string
  ) {}

  /**
   * Get a list of SellerTaxonomyNodes
   */
  getSellerTaxonomyNodes$(): Observable<EtsySellerTaxonomyNode[]> {
    const uri = `${this.api}/application/seller-taxonomy/nodes`;
    return this.http.get<SellerTaxonomyResponse>(uri).pipe(
      map((response) => {
        return response.results.map((r) => {
          return {
            id: r.id,
            level: r.level,
            name: r.name,
            parentId: r.parent_id,
            fullPathTaxonomyIds: r.full_path_taxonomy_ids,
            children: this.getNestedNodeChildren(r),
          };
        });
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Get a list of TaxonomyNodeProperty resources given a taxonomy node ID.
   * @param taxonomyId The unique ID of an Etsy TaxonomyNode.
   * @returns
   */
  getPropertiesByTaxonomyId$(
    taxonomyId: number
  ): Observable<EtsySellerTaxonomyProperty[]> {
    const uri = `${this.api}/application/seller-taxonomy/nodes/${taxonomyId}/properties`;
    return this.http.get<SellerTaxonomyPropertiesResponse>(uri).pipe(
      map((response) => {
        return response.results.map((r) => {
          return {
            propertyId: r.property_id,
            name: r.name,
            displayName: r.display_name,
            scales: r.scales,
            isRequired: r.is_required,
            supportsAttributes: r.supports_attributes,
            supportsVariations: r.supports_variations,
            isMultiValued: r.is_multivalued,
            possibleValues: this.getTaxonomyProperties(r.possible_values),
            selectedValues: this.getTaxonomyProperties(r.selected_values),
          };
        });
      }),
      catchError(() => of([]))
    );
  }

  private getTaxonomyProperties(
    values: SellerTaxonomyPropertiesResponseItemValues[]
  ) {
    return values.map((v) => {
      return {
        valueId: v.value_id,
        name: v.name,
        scaleId: v.scale_id,
        equalTo: v.equal_to,
      };
    });
  }

  private getNestedNodeChildren(
    responseItem: SellerTaxonomyResponseItem
  ): EtsySellerTaxonomyNode[] {
    const children: EtsySellerTaxonomyNode[] = [];
    if (responseItem.children && responseItem.children.length > 0) {
      responseItem.children.forEach((r) => {
        children.push({
          id: r.id,
          level: r.level,
          name: r.name,
          parentId: r.parent_id,
          fullPathTaxonomyIds: r.full_path_taxonomy_ids,
          children: this.getNestedNodeChildren(r),
        });
      });
    }
    return children;
  }
}
