import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingNewsletterComponent } from './listing-newsletter.component';

describe('ListingNewsletterComponent', () => {
  let component: ListingNewsletterComponent;
  let fixture: ComponentFixture<ListingNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
