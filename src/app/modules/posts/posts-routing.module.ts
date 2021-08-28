import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsCreateComponent } from './posts-create/posts-create.component';


const routes: Routes = [
  {
    path: '', component: PostsComponent,
    children: [
      { path: 'list', component: PostsListComponent },
      { path: 'edit/:slug', component: PostsCreateComponent },
      { path: 'create', component: PostsCreateComponent },
      { path: ':slug', component: PostDetailComponent },
    ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
