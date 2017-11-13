import { Directive } from '@angular/core';
import { ElementRef, Input, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[infinite-scroll]' ,
  host: {
    '(scroll)':'onScroll($event)'
  }
})

export class InfiniteScrollDirective {

  public element: any;
  @Output() OnScrollMethod = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
  }

  onScroll($event){
    if(this.element.scrollTop + this.element.clientHeight >= this.element.scrollHeight){
      this.OnScrollMethod.emit();
    }
  }
}
