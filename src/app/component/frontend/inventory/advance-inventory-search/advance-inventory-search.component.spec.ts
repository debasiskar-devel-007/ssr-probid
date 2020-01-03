import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceInventorySearchComponent } from './advance-inventory-search.component';

describe('AdvanceInventorySearchComponent', () => {
  let component: AdvanceInventorySearchComponent;
  let fixture: ComponentFixture<AdvanceInventorySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceInventorySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceInventorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
