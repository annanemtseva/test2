import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Stats {
  'id': number;
  'firstName': string;
  'lastName': string;
  'email': string;
  'gender': string;
  'totalClicks': number;
  'totalPageViews': number;
  'ipAddress': string;
}

export interface User {
  'id': number;
  'page_views': number;
  'date': string;
  'clicks': number;
  'userId': number;
}


export interface Response {
  'content': Stats[];
  'totalPages': number;
  'totalElements': number;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,

  ) { }

  getUsers(page: number, pageSize: number) {
    return this.http.get<Response>(`http://localhost:3000/task/api/v1/users?page=${page}&range=${pageSize}`);

  }

  getUser(userId: number) {
    return this.http.get<User[]>(`http://localhost:3000/task/api/v1/users/statistic?id=${userId}&from=2020-01-01&to=2020-01-07`);
  }


}
