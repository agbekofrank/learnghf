import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../utils/interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  title = 'tour of heroes';
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero).subscribe(
      hero => {
        this.heroes.push(hero);
      }
    );
  }
}

