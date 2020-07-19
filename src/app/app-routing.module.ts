import { CommentResolver } from './resolvers/comments/comment-edit/comment-edit.resolver';
import { CommentEditComponent } from './components/comments/comment-edit/comment-edit.component';
import { PostDetailResolver } from './resolvers/posts/post-detail/post-detail.resolver';
import { PostDetailComponent } from './components/posts/post-detail/post-detail/post-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  {
    path: '',
    children: [
      {
        path: 'posts',
        component: PostsListComponent,
      },
      {
        path: 'posts/:id',
        component: PostDetailComponent,
        resolve: { post: PostDetailResolver },
      },
      {
        path: 'posts/:postId/comments/:commentId',
        component: CommentEditComponent,
        resolve: { comment: CommentResolver },
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
