import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CRUDService {

  private uri = 'https://reqres.in/api/';

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(this.uri + url).map((data) => data);
  }

  delete(url: string) {
    return this.http.delete(this.uri + url).map(data => data);
  }

  put(url: string, data: object) {
    return this.http.put(this.uri + url, data).map(response => response);
  }

  post(url: string, data: object) {
    return this.http.put(this.uri + url, data).map(response => response);
  }

}
