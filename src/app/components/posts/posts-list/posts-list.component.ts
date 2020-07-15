import { PostsService } from '../../../services/posts/posts.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import Post from 'src/app/models/post';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
    this.postsService.fetchPosts().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
    });
  }

  postDetails(): void {
    console.log('test');
    this.router.navigate(['/test']).then();
    this.router.navigate(['/members']);
  }
}
