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

  fetchComment(commentId: number): Observable<Comment> {
    return this.http.get<Comment>(
      `${environment.baseApiUrl}/comments/${commentId}`
    );
  }

  fetchComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `${environment.baseApiUrl}${this.postsUrl}/${postId}/comments`
    );
  }

  addComment(postId: number, comment: Comment): any {
    return this.http.post(
      `${environment.baseApiUrl}${this.postsUrl}/${postId}/comments`,
      comment
    );
  }

  editComment(comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(
      `${environment.baseApiUrl}/comments/${comment.id}`,
      comment
    );
  }
}
