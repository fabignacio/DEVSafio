import { Component, Input } from '@angular/core';

/*INTERFACE */
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-carta-pokemon',
  templateUrl: './carta-pokemon.component.html',
  styles: [
  ]
})
export class CartaPokemonComponent {

  @Input() pokemon!: Pokemon;

}
