import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken: string | null = null;
  accountId: string | null = null;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {
    this.accessToken = localStorage.getItem('accessToken');
    this.accountId = localStorage.getItem('accountId');
  }

  getRequestToken(): Observable<string> {
    return this.http.post<{ request_token: string }>(
      `${ environment.basePath }/auth/request_token`,
      {
        redirect_to: environment.redirectTo,
      },
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${ environment.apiToken }`,
        },
      },
    ).pipe(
      map(data => data.request_token),
    );
  }

  loginRedirect(requestToken: string): void {
    localStorage.setItem('requestToken', requestToken);
    window.location.href = `${ environment.authUrl }?request_token=${ requestToken }`;
  }

  loginApproved(): void {
    const requestToken = localStorage.getItem('requestToken');

    if (!requestToken) {
      this.router.navigate(['dashboard']);
      return;
    }

    this.http.post<{ access_token: string; account_id: string }>(
      `${ environment.basePath }/auth/access_token`,
      { request_token: requestToken },
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${ environment.apiToken }`,
        },
      },
    ).subscribe(({ access_token, account_id }) => {
      this.accessToken = access_token;
      this.accountId = account_id;
      localStorage.setItem('accessToken', this.accessToken);
      localStorage.setItem('accountId', this.accountId);
      this.router.navigate(['dashboard']);
    });
  }

  logout(): void {
    localStorage.removeItem('requestToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('accountId');
    this.accessToken = null;
    this.accountId = null;
    this.router.navigate(['login/approved']);
  }
}
