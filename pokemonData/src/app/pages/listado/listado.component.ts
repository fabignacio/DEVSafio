import { Component } from '@angular/core';

/* SERVICES */
import { PokemonDataService } from '../../services/pokemon-data.service';

/*INTERFACE */
import { Pokedex } from './../../interfaces/pokedex.interface';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent {

  /*Interfaces */
  listado!: Pokedex;
  getPokemon!: Pokemon;

  pokedexListado: any;
  pokemon: any;

  /* PAGINADOR */
  first: number = 0;
  rows: number = 10;

  constructor(private pokedexService: PokemonDataService) { }

  ngOnInit() {
    this.pokedexService.listadoPokemon()
      .subscribe((
        resp => {
          this.listado = resp;
          this.pokedexListado = this.listado.results;
        }
      ));

  };

  /* ENCUENTRA UN POKEMON EN ESPECIFICO */
  masInfo = (nombre: string) => {
    this.pokedexService.getPokemon(nombre).subscribe((
      resp => {
        this.getPokemon = resp;
        this.pokemon = this.getPokemon;
      }
    ));
  };

  /* MARCA UN POKEMON COMO FAVORITO */
  favorito = (nombre: string) => {
    this.pokedexService.getPokemon(nombre).subscribe((
      resp => {
        this.getPokemon = resp;
        this.pokemon = this.getPokemon;
      }
    ));
  };

  /* METODOS PARA LA PAGINACION */
  next() {
    this.first = this.first + this.rows;
  };

  prev() {
    this.first = this.first - this.rows;
  };

  reset() {
    this.first = 0;
  };

  isLastPage(): boolean {
    return this.listado.count ? this.first === this.listado.count - this.rows : true;
  };

  isFirstPage(): boolean {
    return this.listado.count ? this.first === 0 : true;
  };

}
