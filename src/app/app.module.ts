import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorpoAppComponent } from './corpo-app/corpo-app.component';
import { RodapeAppComponent } from './rodape-app/rodape-app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResponsavelComponent } from './responsavel/responsavel.component';
import { AppRountingModule } from './app-rounting.module';

@NgModule({
  declarations: [
    AppComponent,
    CorpoAppComponent,
    RodapeAppComponent,
    HeaderComponent,
    FooterComponent,
    ResponsavelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
