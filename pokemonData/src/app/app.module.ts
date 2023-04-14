import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

/* MODULOS PERSONALIZADOS*/
import { PrimeNgModule } from './primeng/prime-ng.module';

/* COMPONENTES */
import { MainPageComponent } from './pages/mainPage/main-page.component';
import { TablaListadoComponent } from './pages/tablaListado/tabla-listado.component';
import { TablaAbecedarioComponent } from './pages/tabla-abecedario/tabla-abecedario.component';
import { CartaPokemonComponent } from './pages/carta-pokemon/carta-pokemon.component';
import { PokemonFavoritoComponent } from './pages/pokemon-favorito/pokemon-favorito.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TablaListadoComponent,
    TablaAbecedarioComponent,
    CartaPokemonComponent,
    PokemonFavoritoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
