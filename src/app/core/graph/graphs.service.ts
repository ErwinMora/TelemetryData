import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {
  private _apiurl = environment.apiUrl;

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  private _getAuth() {
    const token = this._authService.getToken();
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  graphapi(): Observable<any> {
    return this._http.get<any>(`${this._apiurl}/listar-telemetria`, this._getAuth());
  }
}
