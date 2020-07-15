import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Post from 'src/app/models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.post = data.post;
    });
  }
}
