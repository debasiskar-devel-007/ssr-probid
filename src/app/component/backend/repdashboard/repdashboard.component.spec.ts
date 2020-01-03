import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepdashboardComponent } from './repdashboard.component';

describe('RepdashboardComponent', () => {
  let component: RepdashboardComponent;
  let fixture: ComponentFixture<RepdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
