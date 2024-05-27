import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {
  // el:ElementRef;
  constructor(private el:ElementRef) { 
    // this.el = el;
  }

  @HostBinding("style.backgroundColor")
  bgColor="yellow";

  @HostListener("mouseenter")
  changeFontSize(){
    this.el.nativeElement.style.fontSize="28px";
    this.el.nativeElement.style.padding="16px";
  }

  @HostListener("mouseout")
  resetFont(){
    this.el.nativeElement.style.fontSize=""
    this.el.nativeElement.style.padding="";
  }

}
