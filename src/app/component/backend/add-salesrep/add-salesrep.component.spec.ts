import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesrepComponent } from './add-salesrep.component';

describe('AddSalesrepComponent', () => {
  let component: AddSalesrepComponent;
  let fixture: ComponentFixture<AddSalesrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalesrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalesrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
