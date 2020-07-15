import { CommentsService } from './../../../../services/comments/comments.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Post from 'src/app/models/post';
import Comment from 'src/app/models/comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  comments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.post = data.post;
    });
    this.commentsService
      .fetchComments(this.post.id)
      .subscribe((data) => (this.comments = data));
  }
}
