import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [isVisible]="true">This is a visible element!</div>
    <div [isVisible]="false">This is a hidden element!</div>
    <span makeBigger="20px">Click me and I will grow</span>
    <br>
    {{ assad | multi:3}}
    
    <app-smart-component></app-smart-component>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Directives';
  assad = 'assad saad'
  // visible = true;
}
