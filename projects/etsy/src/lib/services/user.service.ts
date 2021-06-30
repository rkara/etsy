import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { EtsyUser } from '../models/user';
import { ETSY_API} from '../tokens/api';

@Injectable({
  providedIn: 'root',
})
export class EtsyUserService {
  constructor(
    private http: HttpClient,
    @Inject(ETSY_API) private api: string
  ) {}

  getUser$(userId: number): Observable<any | undefined> {
    const uri = `${this.api}/application/users/${userId}`;
    return this.http.get(uri).pipe(
      map((user) => {
        debugger;
        // TODO: Define Interface
        return user;
      }),
      catchError(() => of(undefined))
    );
  }
}
