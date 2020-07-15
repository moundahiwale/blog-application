import { TestBed } from '@angular/core/testing';

import { PostDetailResolver } from './post-detail.resolver';

describe('PostDetailResolver', () => {
  let resolver: PostDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PostDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
