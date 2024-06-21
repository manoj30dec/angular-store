import { AfterRenderPhase, AfterViewInit, Component, DestroyRef, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, afterNextRender, input } from '@angular/core';

function test(){
  console.log("I am example of destroyRef ")
}

@Component({
  selector: 'life-cycles',
  standalone: true,
  imports: [],
  templateUrl: './life-cycles.component.html',
  styleUrl: './life-cycles.component.scss'
})
export class LifeCyclesComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {
  private elementHeight = 0;
  constructor(private destroyRef:DestroyRef,elementRef:ElementRef ){
    console.log("Hi I am constructor, I am child")
    destroyRef.onDestroy(test)
    const nativeElement = elementRef.nativeElement;
    // Use the `Write` phase to write to a geometric property.
    afterNextRender(()=>{
      nativeElement.style.display = 'block';
      nativeElement.style.backgroundColor = 'tomato';
      nativeElement.style.padding = '20px';
      nativeElement.style.marginBottom = '20px';
    },{phase:AfterRenderPhase.Write})

    // Use the `Read` phase to read geometric properties after all writes have occurred.
    afterNextRender(() => {
      this.elementHeight = nativeElement.getBoundingClientRect().height;
      this.elementHeight = nativeElement.getBoundingClientRect().height;
    }, {phase: AfterRenderPhase.Read});
    
  }

  @Input() name:string = "";

  ngOnInit(): void {
    console.log("Hi I am ngOnInit Hook")
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change:any = changes;
    console.log("onChanges  ", change.name)
    console.log("onChanges Previouse Value ", change.name.previousValue)
    console.log("onChanges Current Value ", change.name.currentValue)
    console.log("onChanges First Change  ", change.name.firstChange)
  }

  ngOnDestroy(): void {
    console.clear()
    console.log("I am destroyed")
  }

  ngDoCheck(): void {
    console.log("I am example of ngDoCheck")
  }

  ngAfterViewInit(): void {
    console.log("I am example of ngAfterViewInit")
    console.log("height hai", this.elementHeight)
  }

  
  

}
