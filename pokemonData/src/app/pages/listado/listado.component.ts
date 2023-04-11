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

  /*INTERFACES */
  listado!: Pokedex;
  getPokemon!: Pokemon;

  /* VARIABLES DE LA CLASE */
  pokedexListado: any;
  pokemon: any;
  abecedario: any;

  /* CONTADORES */
  contA: number = 0;
  contB: number = 0;
  contC: number = 0;
  contD: number = 0;
  contE: number = 0;
  contF: number = 0;
  contG: number = 0;
  contH: number = 0;
  contI: number = 0;
  contJ: number = 0;
  contK: number = 0;
  contL: number = 0;
  contM: number = 0;
  contN: number = 0;
  contÑ: number = 0;
  contO: number = 0;
  contP: number = 0;
  contQ: number = 0;
  contR: number = 0;
  contS: number = 0;
  contT: number = 0;
  contU: number = 0;
  contV: number = 0;
  contW: number = 0;
  contX: number = 0;
  contY: number = 0;
  contZ: number = 0;

  data: any;

  /* PAGINADOR */
  first: number = 0;
  rows: number = 10;

  constructor(private pokedexService: PokemonDataService) { }

  /* CARGAR LA TABLA INICIAL Y LA DEL CONTADOR POR LETRA */
  ngOnInit() {

    this.pokedexService.listadoPokemon()
      .subscribe((
        resp => {
          this.listado = resp;
          this.pokedexListado = this.listado.results;

          this.pokedexListado.map((x: { name: string; }) => {
            if (x.name.toUpperCase().startsWith('A')) {
              this.contA += 1;
            };

            if (x.name.toUpperCase().startsWith('B')) {
              this.contB += 1;
            };

            if (x.name.toUpperCase().startsWith('C')) {
              this.contC += 1;
            };

            if (x.name.toUpperCase().startsWith('D')) {
              this.contD += 1;
            };

            if (x.name.toUpperCase().startsWith('E')) {
              this.contE += 1;
            };

            if (x.name.toUpperCase().startsWith('F')) {
              this.contF += 1;
            };

            if (x.name.toUpperCase().startsWith('G')) {
              this.contG += 1;
            };

            if (x.name.toUpperCase().startsWith('H')) {
              this.contH += 1;
            };

            if (x.name.toUpperCase().startsWith('I')) {
              this.contI += 1;
            };

            if (x.name.toUpperCase().startsWith('J')) {
              this.contJ += 1;
            };

            if (x.name.toUpperCase().startsWith('K')) {
              this.contK += 1;
            };

            if (x.name.toUpperCase().startsWith('L')) {
              this.contL += 1;
            };

            if (x.name.toUpperCase().startsWith('M')) {
              this.contM += 1;
            };

            if (x.name.toUpperCase().startsWith('N')) {
              this.contN += 1;
            };

            if (x.name.toUpperCase().startsWith('Ñ')) {
              this.contÑ += 1;
            };

            if (x.name.toUpperCase().startsWith('O')) {
              this.contO += 1;
            };

            if (x.name.toUpperCase().startsWith('P')) {
              this.contP += 1;
            };

            if (x.name.toUpperCase().startsWith('Q')) {
              this.contQ += 1;
            };

            if (x.name.toUpperCase().startsWith('R')) {
              this.contR += 1;
            };

            if (x.name.toUpperCase().startsWith('S')) {
              this.contS += 1;
            };

            if (x.name.toUpperCase().startsWith('T')) {
              this.contT += 1;
            };

            if (x.name.toUpperCase().startsWith('U')) {
              this.contU += 1;
            };

            if (x.name.toUpperCase().startsWith('V')) {
              this.contV += 1;
            };

            if (x.name.toUpperCase().startsWith('W')) {
              this.contW += 1;
            };

            if (x.name.toUpperCase().startsWith('X')) {
              this.contX += 1;
            };

            if (x.name.toUpperCase().startsWith('Y')) {
              this.contY += 1;
            };

            if (x.name.toUpperCase().startsWith('Z')) {
              this.contZ += 1;
            };
          });

          this.data = [
            {
              'A': this.contA,
              'B': this.contB,
              'C': this.contC,
              'D': this.contD,
              'E': this.contE,
              'F': this.contF,
              'G': this.contG,
              'H': this.contH,
              'I': this.contI,
              'J': this.contJ,
              'K': this.contK,
              'L': this.contL,
              'M': this.contM,
              'N': this.contN,
              'NN': this.contÑ,
              'O': this.contO,
              'P': this.contP,
              'Q': this.contQ,
              'R': this.contR,
              'S': this.contS,
              'T': this.contT,
              'U': this.contU,
              'V': this.contV,
              'W': this.contW,
              'X': this.contX,
              'Y': this.contY,
              'Z': this.contZ
            }
          ];
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
