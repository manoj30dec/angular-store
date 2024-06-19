import { Component } from '@angular/core';
import { OutputChildComponent } from '../output-child/output-child.component';

@Component({
  selector: 'output-parent',
  standalone: true,
  imports: [OutputChildComponent],
  templateUrl: './output-parent.component.html',
  styleUrl: './output-parent.component.scss'
})
export class OutputParentComponent {
  name:string= "Amit Bhardwaj"
  showNewName(data:string){
    this.name = data
  }
}
