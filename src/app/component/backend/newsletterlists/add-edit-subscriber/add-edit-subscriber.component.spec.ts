import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSubscriberComponent } from './add-edit-subscriber.component';

describe('AddEditSubscriberComponent', () => {
  let component: AddEditSubscriberComponent;
  let fixture: ComponentFixture<AddEditSubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
