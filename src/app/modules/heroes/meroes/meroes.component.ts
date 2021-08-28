import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { Hero } from '../../../utils/interfaces/hero';
import { MessageService } from 'src/app/services/message.service';
import { HeroService } from '../../../services/hero.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-meroes',
  templateUrl: './meroes.component.html',
  styleUrls: ['./meroes.component.scss']
})
export class MeroesComponent implements OnInit {
  @Input() templateRef: TemplateRef<any>;
  selectedHero: Hero;
  newHero: Hero;
  heroes: Hero[];
  displayedColumns: string[] = ['id', 'name', 'actionsColumn'];
  dataSource = new MatTableDataSource<Hero>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private heroService: HeroService,
    private dialogService: ModalService,
    private messageService: MessageService
  ) { }

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
      });
  }
  delete(hero: Hero): void {
    this.dialogService.openConfirmDialog(
      'Are you really sure you want delete this hero ?'
      ).afterClosed().subscribe(
        (res) => {
          if (res) {
            this.heroes = this.heroes.filter(h => h !== hero);
            this.heroService.deleteHero(hero).subscribe();
          }
        }
      );
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.dataSource.data = heroes;
      this.dataSource.paginator = this.paginator;
    });
    this.getHeroes();
    // console.log(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
  }
}
