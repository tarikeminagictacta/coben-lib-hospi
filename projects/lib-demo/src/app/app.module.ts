import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CobenLibHospiModule } from '@coben-lib/hospi';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CobenLibHospiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
