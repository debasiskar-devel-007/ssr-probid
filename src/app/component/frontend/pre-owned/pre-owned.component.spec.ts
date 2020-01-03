import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOwnedComponent } from './pre-owned.component';

describe('PreOwnedComponent', () => {
  let component: PreOwnedComponent;
  let fixture: ComponentFixture<PreOwnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOwnedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOwnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
