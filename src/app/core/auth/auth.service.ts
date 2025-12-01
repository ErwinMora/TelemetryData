import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _apiurl = environment.apiUrl;
  private _tokenurl = 'tokenacceso';

  constructor(private _http: HttpClient, private _router: Router) { }

  login(userData: { email: string, password: string }): Observable<Blob> {
    return this._http.post(`${this._apiurl}/login`, userData, { responseType: 'blob' }).pipe(
      catchError(error => {
        const errorMsg = error?.error?.message || 'Se produjo un error inesperado. Inténtelo de nuevo o más tarde.';
        return throwError(() => ({ message: errorMsg }));
      })
    );
  }

  logout() {
    localStorage.removeItem(this._tokenurl);
    this._router.navigate(['/auth/login']);
  }

  saveToken(token: string) {
    localStorage.setItem(this._tokenurl, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this._tokenurl);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
