import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http : HttpClient) { }

  login(data : any){
    return this.http.post(`${environment.apiUrl}/users/login`, data);
  }

  setToken(token : string){
    localStorage.setItem('authToken', token);
  }

  getToken(){
    localStorage.getItem('authToken');
  }

  setRole(userRole : string){
    localStorage.setItem('role', userRole);
  }

  getRole(){
    localStorage.getItem('role');
  }

  logout(){
    localStorage.clear();
  }
}
