import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../services/hero.service';
import { Hero } from '../../../utils/interfaces/hero';

@Component({
  selector: 'app-herodashboard',
  templateUrl: './herodashboard.component.html',
  styleUrls: ['./herodashboard.component.scss']
})
export class HerodashboardComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

