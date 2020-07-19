import { TestBed } from '@angular/core/testing';

import { CommentResolver } from './comment-edit.resolver';

describe('CommentResolver', () => {
  let service: CommentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
