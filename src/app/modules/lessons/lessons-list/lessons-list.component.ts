import { Component, OnInit, HostBinding } from '@angular/core';
import { Lesson } from 'src/app/utils/interfaces/lesson';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
})
export class LessonsListComponent implements OnInit {

  lessons: Lesson[];

  constructor(
    private lesonService: LessonService
  ) { }

  ngOnInit(): void {
    this.getLessons();

  }
  getLessons(): void {
    this.lesonService.getLessons().subscribe(
      lessons => {
        this.lessons = lessons;
        // console.log(lessons)
      }
    );
  }
}
