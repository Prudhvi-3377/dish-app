import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
   }

  getToken(value:string):string{
    if (value === 'role') {
      return localStorage.getItem('role') || '';
    }
    return localStorage.getItem('token') || '';
  }
  setToken(token: string,role:string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    
  }
  clearToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
  isAuthenticated(): boolean {
    return !!this.getToken('token');
  }
}
