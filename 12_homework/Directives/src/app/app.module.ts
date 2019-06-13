import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartComponentComponent } from './smart-component.component';
import { DumbComponentComponent } from './dumb-component.component';
import { IsVisibleDirective } from './is-visible.directive';
import { MakeBiggerDirective } from './make-bigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponentComponent,
    DumbComponentComponent,
    IsVisibleDirective,
    MakeBiggerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
