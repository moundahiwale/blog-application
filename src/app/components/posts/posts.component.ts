import { PostsService } from './../../services/posts.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import Post from 'src/app/models/post';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postsService: PostsService;
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

  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.postsService.fetchPosts().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
    });
  }
}
