import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSubcategoryComponent } from './listing-subcategory.component';

describe('ListingSubcategoryComponent', () => {
  let component: ListingSubcategoryComponent;
  let fixture: ComponentFixture<ListingSubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingSubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
