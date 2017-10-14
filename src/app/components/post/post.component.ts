import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Observable<Post[]>;
  newPost: Observable<Post>;
  errorPost: Observable<Post>;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  getPosts() {
    this.posts = this.postService.getPosts();
  }

  createPost() {
    this.newPost = this.postService.createPost();
  }

  getErrorPosts() {
    this.errorPost = this.postService.getErrorPosts();
  }
}
