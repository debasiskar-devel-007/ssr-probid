import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingBlogsComponent } from './listing-blogs.component';

describe('ListingBlogsComponent', () => {
  let component: ListingBlogsComponent;
  let fixture: ComponentFixture<ListingBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
