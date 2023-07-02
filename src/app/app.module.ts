import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorpoAppComponent } from './corpo-app/corpo-app.component';
import { RodapeAppComponent } from './rodape-app/rodape-app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResponsavelComponent } from './responsavel/responsavel.component';
import { FormsModule } from '@angular/forms';
import { AppRountingModule } from './app-rounting.module';
import { HttpClientModule } from '@angular/common/http';
import { CepPipe } from './cep.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CorpoAppComponent,
    RodapeAppComponent,
    HeaderComponent,
    FooterComponent,
    ResponsavelComponent,
    CepPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRountingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
