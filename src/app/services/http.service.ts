import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {

   }

   httpGet(url:string){
    return this.http.get(url)
   }
   httpPost(url:string, body:any={}, options:any={}){
    return this.http.post(url,body, options)
   }

}
