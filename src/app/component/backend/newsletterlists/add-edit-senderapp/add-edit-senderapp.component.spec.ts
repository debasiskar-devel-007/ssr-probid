import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSenderappComponent } from './add-edit-senderapp.component';

describe('AddEditSenderappComponent', () => {
  let component: AddEditSenderappComponent;
  let fixture: ComponentFixture<AddEditSenderappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSenderappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSenderappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
