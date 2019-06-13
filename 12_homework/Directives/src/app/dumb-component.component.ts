import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dumb-component',
  template: `    
    {{content}}
  `,
  styles: ['']
})
export class DumbComponentComponent implements OnInit {

  @Input('content') content :string;

  constructor() { }

  ngOnInit() {
  }

}
