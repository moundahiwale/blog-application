import { PostDetailResolver } from './resolvers/post-detail.resolver';
import { PostDetailComponent } from './components/posts/post-detail/post-detail/post-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';

const routes: Routes = [
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
        resolve: {post: PostDetailResolver}
      },
    ],
  },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', redirectTo: '/posts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
