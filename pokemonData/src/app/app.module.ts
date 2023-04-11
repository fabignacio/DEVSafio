import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

/* MODULOS PERSONALIZADOS*/
import { PrimeNgModule } from './primeng/prime-ng.module';

/* COMPONENTES */
import { ListadoComponent } from './pages/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
