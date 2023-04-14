import { Component, Input } from '@angular/core';

/*INTERFACE */
import { Pokemon } from './../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-favorito',
  templateUrl: './pokemon-favorito.component.html',
  styles: [
  ]
})
export class PokemonFavoritoComponent {

  /*BOLEANOS */
  visible: boolean = false;

  @Input() favorito!: Pokemon

  /* MOSTRAR DIALOG DEL POKEMON FAVORITO */
  showInfo = () => {
    this.visible = true;
  }
}
