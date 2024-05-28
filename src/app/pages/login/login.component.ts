import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators   } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = new FormControl("",[
    Validators.required,
    Validators.email
  ])

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(6)
  ])

  loginForm= new FormGroup({
    email:this.email,
    password:this.password
  })

  login(event:any){
    console.log(this.loginForm.value)
  }

  reset(){
    this.loginForm.reset()
  }

}
