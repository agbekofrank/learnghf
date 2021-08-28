import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroesModule } from 'src/app/modules/heroes/heroes.module';
import { AccountsModule } from 'src/app/accounts/accounts.module';
import { AgMaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostsModule } from 'src/app/modules/posts/posts.module';
import { UploadComponent } from 'src/app/modules/upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LessonsModule } from 'src/app/modules/lessons/lessons.module';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    HeroesModule,
    LessonsModule,
    AccountsModule,
    AgMaterialModule,
    PostsModule
    // PipesModule
  ]
})
export class DefaultModule { }
