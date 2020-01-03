import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesrepSignupComponent } from './salesrep-signup.component';

describe('SalesrepSignupComponent', () => {
  let component: SalesrepSignupComponent;
  let fixture: ComponentFixture<SalesrepSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesrepSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesrepSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
