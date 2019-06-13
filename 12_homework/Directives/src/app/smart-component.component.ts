import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-smart-component',
  template: `
    <ul>
      <li *ngFor="let names of objectList">
        <app-dumb-component [content]="names.name"></app-dumb-component>
      </li>
    </ul>
  `,
  styles: ['']
})

export class SmartComponentComponent implements OnInit {
  public objectList = [
    {name: 'Jean'},
    {name: 'Assad'},
    {name: 'Adriano'},
    {name: 'Tyler'},
  ];

  constructor() {
  }


  ngOnInit() {
  }

}
