import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interface/users/login.response';
import { User } from '../interface/users/users.response';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'https://flink-web-test.herokuapp.com/api/v1';
  constructor(private http: HttpClient) { }
  newUser(user: User) {
    return this.http.post<User>(`${this.url}/register`, user);
  }
  login(user: Login) {
    return this.http.post<Login>(`${this.url}/login`, user);
  }
}
