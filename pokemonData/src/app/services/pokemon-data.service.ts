import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

/*VARIABLES DE ENTORNO */
import { enviroment } from './../../enviroments/enviroment';

/*INTERFACES */
import { Pokedex } from '../interfaces/pokedex.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  private _baseUrl: string = enviroment.baseApiPokemon;
  private _pokedex!: Pokedex;

  getPokedex() {
    return { ... this._pokedex };
  }

  constructor(private http: HttpClient) { }

  listadoPokemon = (): Observable<Pokedex> => {
    const url = `${this._baseUrl}pokemon?offset=0&limit=1279`;

    return this.http.get<Pokedex>(url)
      .pipe(
        (
          map(resp => {
            return resp
          })
        )
      );
  };
}
