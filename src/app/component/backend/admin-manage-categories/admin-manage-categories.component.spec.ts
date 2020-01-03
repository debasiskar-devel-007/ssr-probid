import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageCategoriesComponent } from './admin-manage-categories.component';

describe('AdminManageCategoriesComponent', () => {
  let component: AdminManageCategoriesComponent;
  let fixture: ComponentFixture<AdminManageCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
