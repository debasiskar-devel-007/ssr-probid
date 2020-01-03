import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBlogcatComponent } from './add-edit-blogcat.component';

describe('AddEditBlogcatComponent', () => {
  let component: AddEditBlogcatComponent;
  let fixture: ComponentFixture<AddEditBlogcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditBlogcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBlogcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
