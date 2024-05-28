import { Injectable, OnInit, Signal, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalCounterService implements OnInit {
  private count = signal(0);

  doubleCount : Signal<number>=computed(()=>this.count() * 2)

  constructor() { 
    // console.log("Count log ", this.count());
    // console.log("Double Count log ", this.doubleCount());
    effect(()=>{
      console.log("Count log ", this.count());
      console.log("Double Count log ", this.doubleCount());
    })
  }

  getCounter(){
    return this.count();
  }
  incrementCounter(){
    this.count.update((oldVal)=>{
      return oldVal+1
    })
  }
  ngOnInit(){
    // console.log("Count log ", this.count());
    // console.log("Double Count log ", this.doubleCount());
  }
}
