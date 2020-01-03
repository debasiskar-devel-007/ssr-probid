import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInventorySearchBackendComponent } from './basic-inventory-search-backend.component';

describe('BasicInventorySearchBackendComponent', () => {
  let component: BasicInventorySearchBackendComponent;
  let fixture: ComponentFixture<BasicInventorySearchBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInventorySearchBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInventorySearchBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
