import { Injectable } from '@angular/core';
import { Post } from '../utils/interfaces/post';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, tap, catchError, delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationsComponent } from '../shared/components/notifications/notifications.component';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = environment.baseUrl;
  post: Post;
  myPost: FormData;
  constructor(
    private http: HttpClient,
    // private messageService: MessageService,
    private notifications: MatSnackBar
  ) { }

  private log(msg) {
    this.notifications.openFromComponent(NotificationsComponent, {
      data: msg
    });
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl.concat('/posts/api/')).pipe(
      // delay(5000)
      // tap(_ => this.log('Fetched Posts'))
    );
  }
  getPost(slug: string): Observable<Post> {
    const url = this.baseUrl.concat('/posts/api/' + `${slug}`);
    return this.http.get<Post>(url).pipe(
      // delay(5000),
      // tap(_ => this.log(`Selected ${slug}`))
    );
  }
  createPost(formData) {
    return this.http.post(this.baseUrl.concat('/posts/api/create/'), formData).pipe(
      tap((newPost: Post) => this.log(`Added posts id = ${newPost.id}`))
    );
  }
  updatePost(formData, slug) {
    return this.http.put(
      this.baseUrl.concat(`/posts/api/${slug}` + `/edit/`), formData).pipe(
        tap((post: Post) => this.log(`Edited post with id ${post.id}`))
      );
  }

  deletePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const purl = this.baseUrl.concat('/posts/api/');
    const url = `${purl + `${id}` + '/delete'}`;
    return this.http.delete<Post>(url).pipe();
  }
}
