import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSubscriberGroupComponent } from './add-edit-subscriber-group.component';

describe('AddEditSubscriberGroupComponent', () => {
  let component: AddEditSubscriberGroupComponent;
  let fixture: ComponentFixture<AddEditSubscriberGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSubscriberGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSubscriberGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
