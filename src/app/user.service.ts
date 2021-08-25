import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  doRegistration(user: any) {
    user.accountno=  Math.floor(10000000000 + Math.random() * 90000000000);
    return this.http.post("http://localhost:9002/api/users/register",user);
  }
  
  constructor(private http:HttpClient) { }
}
