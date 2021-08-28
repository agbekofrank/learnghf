import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeroesComponent } from './meroes/meroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { RouterModule } from '@angular/router';
import { HerodashboardComponent } from './herodashboard/herodashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgMaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    HeroesComponent,
    MeroesComponent,
    HeroDetailComponent,
    HerodashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    AgMaterialModule,
    SharedModule
  ],
  exports: [
    // HeroesComponent,
    // MeroesComponent,
    // HeroDetailComponent,
    // HerodashboardComponent,
  ]
})
export class HeroesModule { }
