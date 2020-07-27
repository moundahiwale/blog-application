import { PostsService } from '../../../services/posts/posts.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import Post from 'src/app/models/post';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  columns: string[] = [
    'id',
    'title',
    'author',
    'publish_date',
    'slug',
    'description',
    'content',
  ];
  dataSource: MatTableDataSource<Post>;

  constructor(private postsService: PostsService, private router: Router) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.postsService.fetchPosts().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      },
      (error: HttpErrorResponse) => console.error(error.message)
    );
  }
}
