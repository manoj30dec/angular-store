import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { CommonModule } from '@angular/common';
import { PrimeHeaderComponent } from './prime-header/prime-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    UsersComponent, 
    PrimeHeaderComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges, OnInit {
  constructor(){
  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes detected in app component")
    console.log(changes)
    // console.log(changes.newAge.currentValue)
    
  }
  title = 'angular-tutorial';
  myValue = 97;
  navigation=[
    // "Home","All Products","Product Detail", "Users"
    {pageName:"Home", routePath:"/home"},
    {pageName:"All Products", routePath:"/all-products"},
    {pageName:"Product Detail", routePath:"/product-detail"},
    {pageName:"Example of two way data binding", routePath:"/two-way-data-binding-example"},
    {pageName:"Global State management using service", routePath:"/global-statemanagement"},
    {pageName:"Angular Signals", routePath:"/angular-signals"},
    {pageName:"Users", routePath:"/users"},
    {pageName:"Contact Us", routePath:"/contact-us"},
    {pageName:"Login", routePath:"/login"},
  ]
  

  
}
