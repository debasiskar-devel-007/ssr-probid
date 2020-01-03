import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkLeftdivComponent } from './bk-leftdiv.component';

describe('BkLeftdivComponent', () => {
  let component: BkLeftdivComponent;
  let fixture: ComponentFixture<BkLeftdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkLeftdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkLeftdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
