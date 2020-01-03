import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingTestimonialComponent } from './listing-testimonial.component';

describe('ListingTestimonialComponent', () => {
  let component: ListingTestimonialComponent;
  let fixture: ComponentFixture<ListingTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
