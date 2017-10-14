import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';

@Injectable()
export class PostService {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts() {
    let headers = new HttpHeaders().set('Authorization', 'auth-token');
    return this.http.get<Post[]>(this.ROOT_URL + '/posts', { headers });
  }

  createPost() {
    const data: Post = {
      id: null,
      userId: 23,
      title: 'My new post',
      body: 'Test post!'
    }
    return this.http.post<Post>(this.ROOT_URL + '/posts', data);
  }

  getErrorPosts() {
    return this.http.get<Post>(this.ROOT_URL + '/foo')
      .retry(3)
      .catch(err => {
        console.error(err);
        return Observable.of(err);
      });
  }
}
