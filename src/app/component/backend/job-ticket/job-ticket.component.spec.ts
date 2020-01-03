import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTicketComponent } from './job-ticket.component';

describe('JobTicketComponent', () => {
  let component: JobTicketComponent;
  let fixture: ComponentFixture<JobTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
