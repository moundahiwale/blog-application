import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostDetailComponent } from './post-detail.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, PartialObserver } from 'rxjs';
import { CommentsService } from 'src/app/services/comments/comments.service';
import Post from 'src/app/models/post';

const mockPost = {
  id: 1,
  title: 'Blog post #1',
  author: 'Melissa Manges',
  publish_date: '2016-02-23',
  slug: 'blog-post-1',
  description: 'Utroque denique invenire et has.',
  content:
    '<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>',
};

const mockPostWrapper = {
  post: mockPost,
};

const activatedRouteStub = {
  data: Observable.create((observer: PartialObserver<any>) => {
    observer.next(mockPostWrapper);
  }),
};

const commentsServiceStub = {
  fetchComments: Observable.create((observer: PartialObserver<Post[]>) => {
    observer.next([mockPost]);
  }),
};

fdescribe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailComponent],
      imports: [],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: CommentsService, useValue: commentsServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have post from mock post`, () => {
    expect(component.post).toBe(mockPost);
  });
});
