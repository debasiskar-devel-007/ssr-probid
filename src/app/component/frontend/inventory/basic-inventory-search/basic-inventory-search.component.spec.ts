import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInventorySearchComponent } from './basic-inventory-search.component';

describe('BasicInventorySearchComponent', () => {
  let component: BasicInventorySearchComponent;
  let fixture: ComponentFixture<BasicInventorySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInventorySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInventorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
