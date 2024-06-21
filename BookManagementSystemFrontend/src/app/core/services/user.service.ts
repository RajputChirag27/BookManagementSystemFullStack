import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http : HttpClient) { }
  
  createUser(data : any){
    return this.http.post(`${environment.apiUrl}/users/signup`, data)
  }
}
