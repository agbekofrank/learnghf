import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/utils/interfaces/lesson';
import { LessonService } from 'src/app/services/lesson.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {

  @Input() lesson: Lesson;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  formGroupObj = new FormGroup({
    DEV: new FormControl(),
    TEST: new FormControl(),
    UAT: new FormControl(),
    PROD: new FormControl()
  });

  constructor(
    private lessonService: LessonService,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private location: Location
  ) { }

  environment = [
    { id: 1, label: 'DEV', value: 'Development Env' },
    { id: 2, label: 'TEST', value: 'Test Env' },
    { id: 3, label: 'UAT', value: 'UAT Env' },
    { id: 4, label: 'PROD', value: 'Production Env' },
  ];

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      const slug = params.get('slug');
      this.getLesson(slug);
    });
  }

  printControl() {
    this.environment.forEach(item => {
      const formVal = this.formGroupObj.controls[item.label].value;
      console.log('value for control ' + item.label + ' is: ' + formVal);
    });
  }

  getLesson(slug): void {
    this.lessonService.getLesson(slug).subscribe(
      lesson => this.lesson = lesson
    );
  }

  goBack(): void {
    this.location.back()
  }

}

