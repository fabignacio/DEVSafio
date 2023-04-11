import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

/*VARIABLES DE ENTORNO */
import { enviroment } from './../../enviroments/enviroment';

/*INTERFACES */
import { Pokedex } from '../interfaces/pokedex.interface';
import { Pokemon } from '../interfaces/pokemon.interface';

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

  /* METODO QUE OBTIENE TODOS LOS POKEMONS */
  listadoPokemon = (): Observable<Pokedex> => {
    const url: string = `${this._baseUrl}pokemon?offset=0&limit=1279`;

    return this.http.get<Pokedex>(url)
      .pipe(
        (
          map(resp => {
            return resp
          })
        )
      );
  };

  /* METODO QUE OBTIENE UN POKEMON */
  getPokemon = (nombre: string): Observable<Pokemon> => {
    const url: string = `${this._baseUrl}pokemon/${nombre}`

    return this.http.get<Pokemon>(url)
      .pipe(
        (
          map(resp => {
            return resp
          })
        )
      );
  };

}
