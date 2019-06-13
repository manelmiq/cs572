import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
    <div isVisible=visible>This is a visible element</div>    
    <div isVisible=false>This is a hidden element</div>        
    <div appMakeBigger >Click me and I will grow</div>
    <app-smart-component></app-smart-component>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Directives';
  visible = true;
}
