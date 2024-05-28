import { Component } from '@angular/core';
import { AComponent } from './a/a.component';
import { B1Component } from './b1/b1.component';

@Component({
  selector: 'global-staemanagement',
  standalone: true,
  imports: [AComponent, B1Component],
  templateUrl: './global-staemanagement.component.html',
  styleUrl: './global-staemanagement.component.scss'
})
export class GlobalStaemanagementComponent {

}
