import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingBlogcatComponent } from './listing-blogcat.component';

describe('ListingBlogcatComponent', () => {
  let component: ListingBlogcatComponent;
  let fixture: ComponentFixture<ListingBlogcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingBlogcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBlogcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
