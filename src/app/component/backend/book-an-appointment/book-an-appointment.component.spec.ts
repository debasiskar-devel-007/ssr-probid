import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAnAppointmentComponent } from './book-an-appointment.component';

describe('BookAnAppointmentComponent', () => {
  let component: BookAnAppointmentComponent;
  let fixture: ComponentFixture<BookAnAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAnAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAnAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
