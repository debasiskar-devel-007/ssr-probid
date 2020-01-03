import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkHeaderComponent } from './bk-header.component';

describe('BkHeaderComponent', () => {
  let component: BkHeaderComponent;
  let fixture: ComponentFixture<BkHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
