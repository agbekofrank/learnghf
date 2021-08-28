import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/utils/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dialogService: ModalService,
    private authService: AuthService
  ) { }
  @Input() post: Post;
  posts: Post[];
  data;
  user;
  ngOnInit(): void {
    this.user = this.authService.getUser() ? JSON.parse(this.authService.getUser()).username :
    this.getPosts();
    this.route.paramMap.subscribe((params: ParamMap) => {
      const slug = params.get('slug');
      this.getPost(slug);
    });
  }
  getHeadLines() {
    for (const post of this.posts) {
      this.data.append(post.title);
    }
  }
  getPost(slug): void {
    // console.log(slug);
    this.postsService.getPost(slug).subscribe(
      post => this.post = post
    );
  }
  getPosts() {
    this.postsService.getPosts().subscribe(
      posts => {
        this.posts = posts;
        this.data = posts.slice(1, 11);

      }
    );
  }
  editButtonClick(slug: string) {
    this.router.navigate([`posts/edit`, slug]);
  }
  deletePost(post: Post): void {
    // this.posts = this.posts.filter(p => p !== post);
    // this.router.navigate(['/posts/list']);
    this.dialogService.openConfirmDialog('Are you sure you want to delete this post ?')
      .afterClosed().subscribe(
        res => {
          if (res) {
            this.postsService.deletePost(post).subscribe();
            this.router.navigate(['/posts/list']);
          }
        }
      );
  }
  goBack() {
    this.location.back();
  }
}
