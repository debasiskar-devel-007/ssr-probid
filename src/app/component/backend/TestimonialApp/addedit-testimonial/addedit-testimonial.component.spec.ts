import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditTestimonialComponent } from './addedit-testimonial.component';

describe('AddeditTestimonialComponent', () => {
  let component: AddeditTestimonialComponent;
  let fixture: ComponentFixture<AddeditTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
