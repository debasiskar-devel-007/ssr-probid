import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesimonialComponent } from './tesimonial.component';

describe('TesimonialComponent', () => {
  let component: TesimonialComponent;
  let fixture: ComponentFixture<TesimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
