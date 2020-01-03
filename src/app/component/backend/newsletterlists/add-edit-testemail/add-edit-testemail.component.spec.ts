import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTestemailComponent } from './add-edit-testemail.component';

describe('AddEditTestemailComponent', () => {
  let component: AddEditTestemailComponent;
  let fixture: ComponentFixture<AddEditTestemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTestemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTestemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
