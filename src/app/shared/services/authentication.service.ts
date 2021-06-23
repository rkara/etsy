import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AppAuthenticationToken } from '../models/authentication';

const SCOPE = 'address_r billing_r listings_r profile_r shops_r transactions_r';
const GRANT_TYPE = 'authorization_code';
const REDIRECT_URI = 'http://localhost:4200/callback';

const CODE_VERIFIER = 'APP_CODE_VERIFIER';
const CODE = 'APP_CODE';
const STATE = 'APP_STATE';

@Injectable({
  providedIn: 'root',
})
export class AppAuthenticationService {
  get accessToken$() {
    return this.accessTokenSubject.asObservable();
  }

  private state?: any;
  private authCode?: string;
  private accessTokenSubject = new BehaviorSubject<
    AppAuthenticationToken | undefined
  >(undefined);

  constructor(private http: HttpClient) {}

  login() {
    this.initAuthenticationFlow();
  }

  performCallback$() {
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');
    const stateParam = urlParams.get('state');
    if (codeParam && stateParam) {
      const stateDecoded = this.htmlDecode(stateParam);
      if (stateDecoded) {
        try {
          const state = JSON.parse(stateDecoded);
          this.setState(state);
        } catch (e) {}
      } else {
        this.setState(undefined);
      }
      this.setAuthCode(codeParam);
      return this.getAccessToken$().pipe(
        map((accessToken) => {
          this.accessTokenSubject.next(accessToken);
          return accessToken;
        })
      );
    }
    this.accessTokenSubject.next(undefined);
    return of(undefined);
  }

  private getState() {
    if (this.state) {
      return this.state;
    }
    const state = localStorage.getItem(STATE);
    if (state) {
      return JSON.stringify(state);
    }
    return undefined;
  }

  private getAuthCode() {
    if (this.authCode) {
      return this.authCode;
    }
    const authCode = localStorage.getItem(CODE);
    return authCode;
  }

  private setState(state: any) {
    this.state = state;
    localStorage.setItem(STATE, JSON.stringify(state));
  }

  private setAuthCode(code: string) {
    this.authCode = code;
    localStorage.setItem(CODE, code);
  }

  private getAccessToken$(): Observable<AppAuthenticationToken | undefined> {
    const uri = 'https://api.etsy.com/v3/public/oauth/token';
    const code = this.getAuthCode();
    const codeVerifier = localStorage.getItem(CODE_VERIFIER);

    if (code && codeVerifier) {
      const params: any = {
        grant_type: GRANT_TYPE,
        client_id: environment.keystring,
        redirect_uri: REDIRECT_URI,
        code,
        code_verifier: codeVerifier,
      };
      return this.http.post(uri, params).pipe(
        map((response: any) => {
          const expiresOn = new Date() + response.expires_in;
          return {
            accessToken: response.access_token,
            tokenType: response.token_type,
            expiresIn: response.expires_in,
            expiresOn,
            refreshToken: response.refresh_token,
          };
        }),
        catchError(() => of(undefined))
      );
    }
    return of(undefined);
  }

  private initAuthenticationFlow() {
    const responseType = 'code';
    const clientId = environment.keystring;
    const redirectUri = REDIRECT_URI;
    const scope = SCOPE;
    const state = '{route: "test"}';
    const codeChallengeMethod = 'S256';

    const codeVerifier = this.getRandomString(128);
    localStorage.setItem(CODE_VERIFIER, codeVerifier);

    const codeVerifierHash = CryptoJS.SHA256(codeVerifier).toString(
      CryptoJS.enc.Base64
    );
    const codeChallenge = codeVerifierHash
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

    const uri = `https://www.etsy.com/oauth/connect?response_type=${responseType}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
      scope
    )}&client_id=${clientId}&state=${encodeURIComponent(
      state
    )}&code_challenge=${codeChallenge}&code_challenge_method=${codeChallengeMethod}`;
    window.location.href = uri;
  }

  private getRandomString(length: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  private htmlDecode(value: string) {
    var e = document.createElement('textarea');
    e.innerHTML = value;
    // handle case of empty input
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  }
}
