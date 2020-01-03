import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditServiceComponent } from './addedit-service.component';

describe('AddeditServiceComponent', () => {
  let component: AddeditServiceComponent;
  let fixture: ComponentFixture<AddeditServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
