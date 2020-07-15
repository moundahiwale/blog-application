import { Injectable } from '@angular/core';
import Comment from 'src/app/models/comment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  comments: Comment[];
  postsUrl = '/posts';

  constructor(private http: HttpClient) {}

  fetchComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `${environment.baseApiUrl}${this.postsUrl}/${postId}/comments`
    );
  }
}
