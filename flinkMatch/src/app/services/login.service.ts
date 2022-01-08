import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../interface/users/login.request';
import { User } from '../interface/users/users.response';
import { Datauser } from '../interface/users/data.response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'https://flink-web-test.herokuapp.com/api/v1';
  constructor(private http: HttpClient) { }
  newUser(user: User) {
    return this.http.post<User>(`${this.url}/register`, user);
  }
  login(user: login) : Observable<Datauser | any>{
    return this.http.post<Datauser>(`${this.url}/login`, user);
  }
}
