import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = 0;
  constructor() { }
  getCounter(){
    return this.count;
  }
  incrementCounter(){
    return this.count++;
  }
}
