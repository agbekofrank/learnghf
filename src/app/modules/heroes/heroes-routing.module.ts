import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeroesComponent } from './meroes/meroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HerodashboardComponent } from './herodashboard/herodashboard.component';
import { HeroesComponent } from './heroes.component';
import { AuthGuard } from 'src/app/accounts/auth.guard';


const routes: Routes = [
    {
        path: '', component: HeroesComponent,
        children: [
            {
                path: 'hero-dashboard',
                component: HerodashboardComponent, canActivate: [AuthGuard]
            },
            { path: 'detail/:id', component: HeroDetailComponent },
            { path: 'meroes', component: MeroesComponent }
        ]
    }
    // { path: '', redirectTo: '/heroes/hero-dashboard', pathMatch: 'full' },
    // { path: 'heroes/hero-dashboard', component: HerodashboardComponent },
    // { path: 'heroes/detail/:id', component: HeroDetailComponent },
    // { path: 'heroes/meroes', component: MeroesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: []
})
export class HeroesRoutingModule { }
