import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceInventorySearchBackendComponent } from './advance-inventory-search-backend.component';

describe('AdvanceInventorySearchBackendComponent', () => {
  let component: AdvanceInventorySearchBackendComponent;
  let fixture: ComponentFixture<AdvanceInventorySearchBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceInventorySearchBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceInventorySearchBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
