import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignalCounterService } from '../../services/signal-counter.service';
import { InputSignalComponent } from './input-signal/input-signal.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'signal-input',
  standalone: true,
  imports: [RouterModule, InputSignalComponent, FormsModule],
  templateUrl: './signal-input.component.html',
  styleUrl: './signal-input.component.scss'
})
export class SignalInputComponent {
  inputSignal=""
  constructor(public signalCounter:SignalCounterService){

  }
}
