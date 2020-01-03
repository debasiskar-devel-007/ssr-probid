import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvplistsComponent } from './rsvplists.component';

describe('RsvplistsComponent', () => {
  let component: RsvplistsComponent;
  let fixture: ComponentFixture<RsvplistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvplistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvplistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
