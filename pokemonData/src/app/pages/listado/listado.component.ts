import { Component } from '@angular/core';

/* SERVICES */
import { PokemonDataService } from '../../services/pokemon-data.service';

/*INTERFACE */
import { Pokedex, Pokemon } from './../../interfaces/pokedex.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent {

  /*Interfaces */
  listado!: Pokedex;
  selectedPokemon!: Pokemon;

  pokedexListado: any;

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

  masInfo = (url: string) => {
    console.log(url);
  }

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
