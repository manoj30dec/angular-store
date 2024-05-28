import { Component } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'a-componenent',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.scss'
})
export class AComponent {
  // constructor(private counterService:CounterService){}
  constructor(public counterService:CounterService){}
  // getCount(){
  //   this.counterService.getCounter()
  // }
}
