import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LifeCyclesComponent } from './life-cycles/life-cycles.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'hooks',
  standalone: true,
  imports: [RouterModule, FormsModule, LifeCyclesComponent],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.scss'
})
export class HooksComponent implements AfterContentInit, AfterContentChecked {
  name:string = "Manoj "
  ngAfterContentInit(): void {
    console.log("Componented nested children content initialized ")
  }
  ngAfterContentChecked(): void {
    console.log("children of nested component is changed")
  }
}
