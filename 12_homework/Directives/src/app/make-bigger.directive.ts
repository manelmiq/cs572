

import {Directive, ElementRef, Input, Renderer2, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective implements OnInit {

  @Input('makeBigger') fontSize: boolean;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', this.fontSize);
  }

  @HostListener('click') mouseEnter() {
    let currentSize: number = parseInt(this.elRef.nativeElement.style.fontSize.replace("px", ""));
    currentSize += 2;
    this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', currentSize + "px");
  }

}


