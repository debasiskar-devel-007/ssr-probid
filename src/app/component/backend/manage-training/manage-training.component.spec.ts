import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTrainingComponent } from './manage-training.component';

describe('ManageTrainingComponent', () => {
  let component: ManageTrainingComponent;
  let fixture: ComponentFixture<ManageTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
