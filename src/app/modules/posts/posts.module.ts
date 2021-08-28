import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsComponent } from './posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PipesModule } from 'src/app/utils/pipes/pipes.module';
import { AgMaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsCreateComponent } from './posts-create/posts-create.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostDetailComponent,
    PostsCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    PipesModule,
    AgMaterialModule,
    SharedModule
  ],
  exports: [
  ]
})
export class PostsModule { }
