import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { AgMaterialModule } from 'src/app/material.module';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    LessonsComponent,
    LessonDetailComponent,
    LessonsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LessonsRoutingModule,
    AgMaterialModule
  ]
})
export class LessonsModule { }
