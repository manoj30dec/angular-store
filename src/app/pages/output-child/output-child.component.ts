import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'output-child',
  standalone: true,
  imports: [OutputChildComponent, FormsModule],
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.scss'
})
export class OutputChildComponent {
  onNameChange = output<string>()
  name:string = "Kashish Chawla"
  setNewName(newName:string){
    // this.onNameChange.emit(newName)
    this.onNameChange.emit(this.name)
  }
}
