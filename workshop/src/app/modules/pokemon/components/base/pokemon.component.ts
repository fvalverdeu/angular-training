import { Component } from '@angular/core'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  pokemon = [];
  ngOnInit(){
    this.pokemon = [
      /*{
        id:1,
        name: 'pokemon1',
        image: ''
      },
      {
        id:2,
        name: 'pokemon2',
        image: ''
      },
      {
        id:3,
        name: 'pokemon3',
        image: ''
      }*/
      1, 2, 3, 10, 6
    ]
  }
}
