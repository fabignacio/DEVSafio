import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

/*INTERFACES */
import { Pokedex } from '../../interfaces/pokedex.interface';
import { Pokemon } from '../../interfaces/pokemon.interface';

/*SERVICES */
import { PokemonDataService } from '../../services/pokemon-data.service';

@Component({
  selector: 'app-tabla-listado',
  templateUrl: './tabla-listado.component.html',
  styles: [
  ]
})
export class TablaListadoComponent {

  /* INTERFACES */

  listado!: Pokedex;
  getPokemon!: Pokemon;
  getFavorito!: Pokemon;

  /* VARIABLES DE LA CLASE */
  pokedexListado: any;
  pokemon: any;
  favorito: any;

  /* FORMULARIO REACTIVO */
  formGroup: FormGroup = this.fb.group({
    selectedPokemon: ['']
  });

  /* PROPIEDADES PARA EL AUTOCOMPLETADO */
  pokemonSelected: any;
  filtroPokemon: any[] = [];

  /* BOLEANOS */
  habilitado = false;

  /* PAGINADOR */
  first: number = 0;
  rows: number = 10;


  constructor(private pokedexService: PokemonDataService, private fb: FormBuilder) { };

  ngOnInit() {
    this.pokedexService.listadoPokemon()
      .subscribe((
        resp => {
          this.listado = resp;
          this.pokedexListado = this.listado.results;
        }))
  };

  /* MARCA UN POKEMON COMO FAVORITO */
  miFavorito = (nombre: string) => {
    this.pokedexService.getPokemon(nombre).subscribe((
      resp => {
        this.getFavorito = resp;
        this.favorito = this.getFavorito;
      }
    ));
  };

  /* ENCUENTRA UN POKEMON EN ESPECIFICO */
  masInfo = (nombre: string) => {
    this.pokedexService.getPokemon(nombre).subscribe((
      resp => {
        this.getPokemon = resp;
        this.pokemon = this.getPokemon;
        //this.existe = true;
      }
    ));
  };

  /* METODO PARA AUTOCOMPLETAR */
  search = (event: any) => {

    let filtroPokemon: string[] = [];
    let query = event.query;

    let nombresPokemon: any[] = [];

    this.pokedexListado.forEach((x: any) => {
      nombresPokemon.push(x);
    });

    for (let i = 0; i < nombresPokemon.length; i++) {
      let pokemon = nombresPokemon[i];
      if (pokemon.name.toLowerCase().indexOf(query.toLowerCase()) == 0) { filtroPokemon.push(pokemon); }
    };

    this.filtroPokemon = filtroPokemon;
  };

  /* METODO PARA FILTRAR */
  filtrar = () => {
    let filtro = this.formGroup.get('selectedPokemon')?.value;
    let nombre = filtro.name;

    let filtroPokemon: string[] = [];

    this.pokedexListado.forEach((x: any) => {
      if (x.name.includes(filtro) || x.name === filtro) {
        filtroPokemon.push(x);
      } else if (x.name.includes(nombre) || x.name === nombre) {
        filtroPokemon.push(x);
      }
    });

    this.pokedexListado = filtroPokemon;
    this.habilitado = true;
  };

  /* METODO PARA LIMPIAR EL FILTRO */
  limpiar = () => {
    this.pokedexService.listadoPokemon()
      .subscribe((
        resp => {
          this.listado = resp;
          this.pokedexListado = this.listado.results;
        })
      );
    this.habilitado = false;
    this.formGroup.reset();
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
