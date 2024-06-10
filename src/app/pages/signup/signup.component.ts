import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'signup',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  register(regForm:NgForm){
    console.log(regForm.value)
  }
  reset(regForm:NgForm){
    regForm.reset()
  }

}
