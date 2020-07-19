import { CommentsService } from './../../../services/comments/comments.service';
import { Injectable } from '@angular/core';
import Comment from 'src/app/models/comment';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentResolver implements Resolve<Comment> {
  constructor(private commentsService: CommentsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Comment> {
    return this.commentsService.fetchComment(route.params.commentId);
  }
}
