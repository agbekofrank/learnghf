import { Injectable } from '@angular/core';
import { Lesson } from '../utils/interfaces/lesson';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  // lesson: Lesson;
  baseUrl = environment.baseUrl + `/lesson/api/lesson/`;
  constructor(
    private http: HttpClient
  ) { }

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.baseUrl.concat('list/'));
  }

  getLesson(slug: string): Observable<Lesson> {
    const url = this.baseUrl.concat(`${slug}`);
    return this.http.get<Lesson>(url);
  }


}
