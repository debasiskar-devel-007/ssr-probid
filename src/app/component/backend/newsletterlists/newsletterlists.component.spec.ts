import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterlistsComponent } from './newsletterlists.component';

describe('NewsletterlistsComponent', () => {
  let component: NewsletterlistsComponent;
  let fixture: ComponentFixture<NewsletterlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
