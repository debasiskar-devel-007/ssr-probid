import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesimoniallistComponent } from './tesimoniallist.component';

describe('TesimoniallistComponent', () => {
  let component: TesimoniallistComponent;
  let fixture: ComponentFixture<TesimoniallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesimoniallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesimoniallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
