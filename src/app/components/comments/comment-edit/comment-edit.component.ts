import { Component, OnInit, Input } from '@angular/core';
import Comment from 'src/app/models/comment';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from './../../../services/comments/comments.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss'],
})
export class CommentEditComponent implements OnInit {
  comment: Comment;
  commentContent: string;

  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.comment = data.comment;
        this.commentContent = this.comment.content;
      },
      (error: HttpErrorResponse) => console.error(error.message)
    );
  }

  editComment(): void {
    this.commentsService.editComment(this.comment).subscribe(
      (data) => (this.commentContent = data.content),
      (error: HttpErrorResponse) => console.error(error.message)
    );
  }
}
