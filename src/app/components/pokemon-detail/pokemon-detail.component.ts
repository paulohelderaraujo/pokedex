import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemonDetails: any;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      if (name) {
        this.pokemonService.getPokemonDetails(name).subscribe((response: any) => {
          this.pokemonDetails = response;
        });
      }
    });
  }
}

}
