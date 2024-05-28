import { Component, OnInit, input } from '@angular/core';


@Component({
  selector: 'input-signal',
  standalone: true,
  imports: [],
  templateUrl: './input-signal.component.html',
  styleUrl: './input-signal.component.scss'
})
export class InputSignalComponent  {
 username=input("Default User Input = Manoj");
 ngOnInit(): void {
   
 }
}
