import Comment from 'src/app/models/comment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent implements OnInit {
  @Input()
  comments: Comment[];

  constructor() {}

  ngOnInit(): void {}
}
