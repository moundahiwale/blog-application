import { Router } from '@angular/router';
import { CommentsService } from './../../../services/comments/comments.service';
import Comment from 'src/app/models/comment';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent implements OnInit {
  @Input()
  comments: Comment[];
  @Input()
  postId: number;
  commentContent: string;

  constructor(
    private commentsService: CommentsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addComment(addCommentForm: NgForm): void {
    let newComment: Comment = {
      user: 'system',
      date: new Date().toString(),
      content: this.commentContent,
      postId: this.postId,
    };

    this.commentsService.addComment(this.postId, newComment).subscribe(
      (data: Comment) => {
        // Assigning data to newComment to copy id of the created comment along with the other properties
        newComment = data;
        this.comments.splice(0, 0, newComment);
        addCommentForm.resetForm();
      },
      (error: HttpErrorResponse) => console.error(error.message)
    );
  }

  editComment(commentId: number): void {
    this.router.navigate([`posts/${this.postId}/comments/${commentId}`]);
  }
}
