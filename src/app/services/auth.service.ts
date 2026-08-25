import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse, SignInRequest, SignUpRequest } from '../models/auth.model';
import { environment } from '../../environments/environment';
import { Path } from '../util/path';
import { Token } from '../util/token';

@Service()
export class AuthService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseUrl: string = environment.apiUrl;
  private readonly signInUrl: string = `${this.baseUrl}/${Path.SIGN_IN}`;
  private readonly signUpUrl: string = `${this.baseUrl}/${Path.SIGN_UP}`;

  public signIn(request: SignInRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.signInUrl, request).pipe(
      tap((response: AuthResponse): void => {
        this.setAccessToken(response.accessToken);
        this.setRefreshToken(response.refreshToken);
      }),
    );
  }

  public signUp(request: SignUpRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.signUpUrl, request).pipe(
      tap((response: AuthResponse): void => {
        this.setAccessToken(response.accessToken);
        this.setRefreshToken(response.refreshToken);
      }),
    );
  }

  private setAccessToken(accessToken: string): void {
    localStorage.setItem(Token.ACCESS_TOKEN, accessToken);
  }

  private setRefreshToken(refreshToken: string): void {
    localStorage.setItem(Token.REFRESH_TOKEN, refreshToken);
  }
}
