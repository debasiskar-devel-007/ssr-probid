import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForConfirmationComponent } from './ask-for-confirmation.component';

describe('AskForConfirmationComponent', () => {
  let component: AskForConfirmationComponent;
  let fixture: ComponentFixture<AskForConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskForConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskForConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
