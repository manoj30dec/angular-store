import { Component } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'b2',
  standalone: true,
  imports: [],
  templateUrl: './b2.component.html',
  styleUrl: './b2.component.scss'
})
export class B2Component {
  constructor(public counterService:CounterService){}
}
