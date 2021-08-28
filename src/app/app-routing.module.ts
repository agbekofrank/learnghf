import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { LoginComponent } from './accounts/login/login.component';
import { UploadComponent } from './modules/upload/upload.component';


const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'upload', component: UploadComponent },
      {
        path: 'posts',
        loadChildren: () => import('./modules/posts/posts.module').then(
          m => m.PostsModule
        )
      },
      {
        path: 'heroes',
        loadChildren: () => import('./modules/heroes/heroes.module').then(
          m => m.HeroesModule
        )
      },
      {
        path: 'accounts', component: AccountsComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'signup', component: SignupComponent },
        ]
      },
      {
        path: 'lessons',
        loadChildren: () => import('./modules/lessons/lessons.module').then(
          m => m.LessonsModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
