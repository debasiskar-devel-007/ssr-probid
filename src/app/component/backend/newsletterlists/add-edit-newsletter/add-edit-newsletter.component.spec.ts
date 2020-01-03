import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNewsletterComponent } from './add-edit-newsletter.component';

describe('AddEditNewsletterComponent', () => {
  let component: AddEditNewsletterComponent;
  let fixture: ComponentFixture<AddEditNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
