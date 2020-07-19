import Post from 'src/app/models/post';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../../../services/posts/posts.service';

@Injectable({
  providedIn: 'root',
})
export class PostDetailResolver implements Resolve<Post> {
  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    return this.postsService.fetchPost(route.params.id);
  }
}
