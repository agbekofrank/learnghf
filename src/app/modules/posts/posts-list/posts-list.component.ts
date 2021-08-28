import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/utils/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})

export class PostsListComponent implements OnInit {
  posts: Post[];
  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(): void {
    this.postsService.getPosts().subscribe(
      posts => this.posts = posts
    );
  }
}

