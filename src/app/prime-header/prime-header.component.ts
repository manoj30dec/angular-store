import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'prime-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './prime-header.component.html',
  styleUrl: './prime-header.component.scss'
})
export class PrimeHeaderComponent implements OnInit {
  // menuItem = input<any[]>();
  @Input() menuItem:any = 'Home';
  @Input({required: true}) value = 0;
  constructor(private title:Title){
    console.log(this.menuItem)
    console.log(this.value)
  }
  
  ngOnInit(): void {
    // console.log("ngOnInit Lifecycle")
    // console.log(this.title.getTitle())
    // console.log(this.title.setTitle("Headers"))
    // console.log(this.menuItem)
  }
  
}
