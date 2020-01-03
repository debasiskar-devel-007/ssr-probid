import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminCategoriesComponent } from './add-admin-categories.component';

describe('AddAdminCategoriesComponent', () => {
  let component: AddAdminCategoriesComponent;
  let fixture: ComponentFixture<AddAdminCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdminCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdminCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
