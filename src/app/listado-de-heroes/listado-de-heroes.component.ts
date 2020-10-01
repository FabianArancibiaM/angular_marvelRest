import { Component, OnInit } from '@angular/core';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../service/heroes.service';

@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  constructor(public heroesService: HeroesService) { }
  public searchString : string;
  public heroes: Array<Heroe> = [];

  ngOnInit(): void {
    this.heroesService.getHeroes();
  }

  submitSearch() {
    this.heroesService.getHeroes(this.searchString);
  }
  prevPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
  }
  nextPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
  }
}
