import { Component, OnInit, ViewChild, HostBinding, Output } from '@angular/core';
// import { LessonService } from 'src/app/services/lesson.service';
import { Lesson } from 'src/app/utils/interfaces/lesson';
import { ActivatedRoute } from '@angular/router';
import { left, right } from 'src/app/utils/animations/pageAnimation';
import { trigger, transition } from '@angular/animations';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
})
export class LessonsComponent implements OnInit {
  isOpen = true;
  lessons: Lesson[];
  animationState: number;

  constructor(
    private route: ActivatedRoute
  ){}

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data.routeIdx;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }


}
