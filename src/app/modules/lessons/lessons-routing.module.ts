import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonsComponent } from './lessons.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';

const routes: Routes = [
  {
    path: '', component: LessonsComponent,
    children: [
      { path: '', component: LessonsListComponent, data: { routeIdx: 0 } },
      { path: ':slug', component: LessonDetailComponent, data: { routeIdx: 1 } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
