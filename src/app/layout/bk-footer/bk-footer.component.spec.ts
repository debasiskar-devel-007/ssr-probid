import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkFooterComponent } from './bk-footer.component';

describe('BkFooterComponent', () => {
  let component: BkFooterComponent;
  let fixture: ComponentFixture<BkFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
