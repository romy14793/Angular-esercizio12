import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectUnsubscribedError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}
  propCount = 0;
  getData() {
    return this.http.get('https://api.covid19api.com');
  }
}
