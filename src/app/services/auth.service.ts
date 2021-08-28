import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';

@Injectable()
export class AuthService {

  // private apiRoot = 'http://localhost:8000';
  private apiRoot = environment.baseUrl;
  constructor(private http: HttpClient) { }

  private setSession(authResult) {
    const token = authResult.token;
    const payload = jwtDecode<JWTPayload>(token);
    const expiresAt = moment.unix(payload.exp);
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('currentUser', JSON.stringify(authResult.user));
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  get token(): string {
    return localStorage.getItem('token');
  }
  login(username: string, password: string) {
    return this.http.post(this.apiRoot + `/api/auth/login/`, { username, password }
    ).pipe(tap(response => this.setSession(response)),
      shareReplay(),
    );
  }
  signup(username: string, email: string, password1: string, password2: string) {
    return this.http.post(this.apiRoot + `/api/auth/signup/`,
      { username, email, password1, password2 }
    ).pipe(
      tap(response => this.setSession(response)),
      shareReplay()
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('expires_at');
    // this.refresh();
  }

  refreshToken() {
    if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
      return this.http.post(
        this.apiRoot.concat('refresh-token/'),
        { token: this.token }
      ).pipe(
        tap(response => this.setSession(response)),
        shareReplay(),
      ).subscribe();
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }
  getUser() {
    return localStorage.getItem('currentUser');
  }
  refresh(): void {
    window.location.reload();
  }
}
interface JWTPayload {
  user_id: number;
  username: string;
  email: string;
  exp: number;
}
