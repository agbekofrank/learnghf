import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Post } from '../utils/interfaces/post';
import { Observable } from 'rxjs';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostListResolversService implements Resolve<Post[]> {
  constructor(
    private postService: PostsService
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<Post[]> {
      return this.postService.getPosts();
    }
}
