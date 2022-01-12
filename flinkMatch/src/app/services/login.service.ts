import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../interface/users/login.request';
import { user } from '../interface/users/users.request';
import { Datauser } from '../interface/users/data.response';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'https://flink-web-test.herokuapp.com/api/v1';
  constructor(private http: HttpClient) { }
  newUser(user: user) {
    return this.http.post<user>(`${this.url}/register`, user);
  }
  login(user: login){
    return this.http.post<Datauser>(`${this.url}/login`, user);
  }
}
