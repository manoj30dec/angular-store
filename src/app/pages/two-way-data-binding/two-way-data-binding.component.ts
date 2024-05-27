import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, booleanAttribute, numberAttribute, OnInit, OnDestroy, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
function formatName(value:string){
  return "Hi " + value;
}

@Component({
  selector: 'normal-input',
  standalone: true,
  // imports: [FormsModule, CommonModule, CountryCodePipe, HighlightDirective ],
  imports: [FormsModule, CommonModule, CountryCodePipe],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.scss'
})
export class TwoWayDataBindingComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input({alias:'userName', transform:formatName}) name="Manoj";
  @Input({transform:booleanAttribute}) isEmpployed:boolean=true;
  @Input({transform:numberAttribute}) age!:number;
  // @Output() ageChange = new EventEmitter<number>();
  @Output() ageChange = new EventEmitter<string>();
  @Output() myEvent = new EventEmitter<number>();
  phoneNumber:number = 971660988;

  constructor(){
    //init properties
    //dependancy injection
    //event listner register
    console.log("Constructor call", this.name)
    //this.age = 0;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes", changes)
    
  }

  onChange(event:Event){
    this.age = +(event.target as HTMLInputElement).value;
    console.log(event)
  }

  
  sendData(){
    console.log("child event EventEmitter clicked")
    this.myEvent.emit(this.age)
  }

  
  ngOnInit(): void {
    console.log("ng Oninit called ", this.name)
    
  }
  @ViewChild("heading") heading?:ElementRef;
  ngAfterViewInit(): void {
    console.log("After view init ", this.heading?.nativeElement.textContent)
  }
  
  ngOnDestroy(){
    console.log(this.name, " component destroy");
  }

  



  



}
