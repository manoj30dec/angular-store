import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators   } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { TokenType } from '@angular/compiler';
import { Router } from '@angular/router';
interface tokenType{
  token:string
}
@Component({
  selector: 'login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(private http:HttpService, private router:Router){

  }
  isLoggedIn:boolean = false;
  loginEndPoint:string="https://fakestoreapi.com/auth/login"

  email = new FormControl("",[
    Validators.required,
    Validators.email
  ])

  username = new FormControl("",[
    Validators.required,
  ])

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(6)
  ])

  loginForm= new FormGroup({
    email:this.email,
    password:this.password,
    username:this.username
  })
  
  login(event:any){
    const credentials = {username:this.loginForm.value.username,password:this.loginForm.value.password} 
    this.http.httpPost(this.loginEndPoint,credentials).subscribe(token=>{
      const cred:any = token
      this.authToken(cred.token)
    })
  }

  authToken(token:string):void{
    localStorage.setItem("as_token",`Bearer ${token}`);
    this.router.navigateByUrl('/home');
  }


  reset(){
    this.loginForm.reset()
  }

}
