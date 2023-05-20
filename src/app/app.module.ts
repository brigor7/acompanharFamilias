import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorpoAppComponent } from './corpo-app/corpo-app.component';
import { RodapeAppComponent } from './rodape-app/rodape-app.component';

@NgModule({
  declarations: [
    AppComponent,
    CorpoAppComponent,
    RodapeAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
