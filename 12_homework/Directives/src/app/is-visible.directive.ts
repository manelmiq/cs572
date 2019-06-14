import {Directive, ElementRef, Input, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnInit {

  @Input('isVisible') visible: boolean;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.visible == true) {
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'block')
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none')
    }
  }

}
