import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter-component',
  template: `
    <button (click)="increase()"> +</button>
    <input type="number" [value]="counterValue">
    <button (click)="decrease()"> -</button>
  `,
  styles: []
})
export class CounterComponentComponent implements OnInit  {

  counterValue: number;

  @Input() counter: number;
  @Output() counterChange: number;


  constructor() {
  }

  increase() {
    this.counterValue++;
  }


  decrease() {
    this.counterValue--;
  }

  ngOnInit() {
    this.counterValue = this.counter;
  }


}
