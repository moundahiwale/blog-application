import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Post from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postsUrl = '/posts';

  constructor(private http: HttpClient) {}

  fetchPost(id: number): Observable<Post> {
    return this.http.get<Post>(
      `${environment.baseApiUrl}${this.postsUrl}/${id}`
    );
  }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.baseApiUrl}${this.postsUrl}`);
  }
}
