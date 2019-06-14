import {Directive, ElementRef, Input, Renderer2, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective implements OnInit {

  @Input('makeBigger') fontSize: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontSize', this.fontSize);
  }


  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    let newSize = (parseInt(this.elementRef.nativeElement.style.fontSize) + 2 ) + "px";
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontSize', newSize );
  }

}


