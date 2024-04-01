import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './Studentapp-routing.module';
import { Studentcomponent } from './Studentapp.Studentcomponent';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Studentcomponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Studentcomponent]
})
export class StudentAppModule { }
