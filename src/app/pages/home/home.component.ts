import { Component } from '@angular/core';
import { TwoWayDataBindingComponent } from '../two-way-data-binding/two-way-data-binding.component';
import { UsersComponent } from '../users/users.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home',
  standalone: true,
  imports: [TwoWayDataBindingComponent, UsersComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  newAge:number = 0;
  receivedFromInput(event:number){
    console.log("Age received in parent ", event)
    this.newAge = event;
  }
  isAvaialble=true;
  destroy(){
    console.log("button clicked")
    this.isAvaialble=!this.isAvaialble;
  }

}
