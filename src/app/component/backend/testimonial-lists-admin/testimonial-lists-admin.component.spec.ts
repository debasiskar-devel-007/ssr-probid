import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialListsAdminComponent } from './testimonial-lists-admin.component';

describe('TestimonialListsAdminComponent', () => {
  let component: TestimonialListsAdminComponent;
  let fixture: ComponentFixture<TestimonialListsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialListsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialListsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
