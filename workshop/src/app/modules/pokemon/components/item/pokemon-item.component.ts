import { Component, Input, OnInit } from '@angular/core'
import { PokemonService } from '../../services';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit{
  @Input() pokemon: any;
  result: any;

  constructor(private service: PokemonService) {}
  ngOnInit() {
    this.service.search(this.pokemon).subscribe(data => {
      this.result = {};
      this.result.id = data.id;
      this.result.name = data.name;
    });
  }
}
