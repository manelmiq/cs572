import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter-component [counter]="componentCounterValue"></app-counter-component>
    <app-counter-component [counter]="componentCounterValue2"></app-counter-component>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'counter-app';
  componentCounterValue = 5;
  componentCounterValue2 = 10;

}
