import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../Model/login-request-model';
import { LoginResponse } from '../Model/login-response-model';
import { environmentUrls } from '../Environment/env-variables';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  
  login(loginRequestBody:LoginRequest): Observable<LoginResponse> {
    
    return this.http.post<LoginResponse>(environmentUrls.Url.login, loginRequestBody);
  }

}

