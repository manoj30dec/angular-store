import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from 'https';
import { Observable } from 'rxjs';
// import { RequestOption } from '../models/common.models';
// import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  //httpGet<T> type defined here will be work as parameter for <T> defined at other places in this function, this is called generic type 
  httpGet<T>(url: string):Observable<T> {
    return this.http.get<T>(url);
  }

  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': this.token
  // })
  // { 
  //   headers:new HttpHeaders({'Content-Type': 'application/json'})
  // })

  httpPost<T>(url: string, body: any, options?:{}) {
    return this.http.post<T>(url, body, options)
  }


  


}
