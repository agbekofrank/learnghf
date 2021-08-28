import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/utils/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Observable } from 'rxjs';
import { IsLoadingService } from '@service-work/is-loading';
import { filter, finalize, delay } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  loading = false;
  routing = false;
  isLoading: Observable<boolean>;
  constructor(
    private postService: PostsService,
    private router: Router,
    private isLoadingService: IsLoadingService
  ) {
  }
  posts: Post[];
  ngOnInit(): void {
    this.loading = true;
    // this.routing = true;
    this.getPosts();
  }
  getPosts(): void {
    this.postService.getPosts().pipe(
      finalize(() => this.loading = false)
    ).subscribe(
      posts => this.posts = posts.slice(0, 11)
    );
  }
  // onSelect(): void {
  //   this.router.events.pipe(
  //     // delay(5000)
  //   ).subscribe((routerEvent: Event) => {
  //     if (routerEvent instanceof NavigationStart) {
  //       this.routing = true;
  //       // console.log(this.routing );
  //       // console.log(routerEvent);
  //     }
  //     if (routerEvent instanceof NavigationEnd) {
  //       this.routing = false;
  //       // console.log(routerEvent);
  //     }
  //   });
  // }

}
