import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewInventoryComponent } from './create-new-inventory.component';

describe('CreateNewInventoryComponent', () => {
  let component: CreateNewInventoryComponent;
  let fixture: ComponentFixture<CreateNewInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
