import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Contact} from '../interface/waifusAndHusbando.response';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private url = 'https://flink-web-test.herokuapp.com/api/v1';
  constructor(private http: HttpClient) { }
  public getPeople() {
    return this.http.get<any>(`${this.url}/getAllWaifusAndHusbandos`) ;
  }
}
