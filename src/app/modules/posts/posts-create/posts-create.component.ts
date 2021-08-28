import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/utils/interfaces/post';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss']
})
export class PostsCreateComponent implements OnInit {

  post: Post;
  slug: string;
  posts: Post[];
  pipe = new DatePipe('en-US');
  now = Date.now();
  mySimpleFormat = this.pipe.transform(this.now, 'YYYY-MM-DD');
  constructor(
    private fb: FormBuilder,
    // private cd: ChangeDetectorRef,
    private postService: PostsService,
    // private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) { }
  form: FormGroup;
  draft;
  ngOnInit(): void {
    this.draft = false;
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(120)]],
      content: ['', [Validators.required]],
      image: [''],
      draft: [false],
      publish_date: ['', [Validators.required]],
    });

    /* For edit of existing post */
    this.route.paramMap.subscribe(
      params => {
        const postSlug = params.get('slug');
        if (postSlug) {
          this.getPost(postSlug);
          this.slug = postSlug;
        }
      }
    );

  }
  assertDraft(e) {
    if (e.target.value) {
      this.form.controls.draft.setValue(e.target.value);
    }
  }
  onFileSelect(event) {
    if (event.target.files) {
      const file = event.target.files[0];
      this.form.get('image').setValue(file);
    }
  }
  getPost(slug: string) {
    this.postService.getPost(slug).subscribe(
      (post: Post) => {
        this.editPost(post);
      },
      (err: any) => console.log(err)
    );
  }

  editPost(post: Post) {
    this.form.patchValue({
      title: post.title,
      content: post.content,
      image: '' ? post.image : '',
      draft: post.draft,
      publish_date: post.publish_date
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.form.get('image').value);
    formData.append('title', this.form.get('title').value);
    formData.append('content', this.form.get('content').value);
    formData.append('draft', this.form.get('draft').value);
    if (this.form.get('publish_date').value) {
      // console.log('there is date');
      formData.append(
        'publish_date', this.datePipe.transform(
          this.form.get('publish_date').value, 'yyyy-MM-dd')
      );
    }else {
      console.log('there is date');
     }
    // console.log(this.form.get('publish_date').value);
    // console.log(formData.get('publish_date'));
    if (this.slug) {
      this.postService.updatePost(formData, this.slug).subscribe(
        (res) => {
          // console.log(res);
          this.router.navigate(['/posts/list/']);
        },
        (err) => console.log(err)
      );
      // console.log('Existing post');
    } else {
      this.postService.createPost(formData).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/posts/list/']);

        },
        (err) => console.log(err)
      );
      // console.log('New post');
    }
    this.form.reset();
  }
}

