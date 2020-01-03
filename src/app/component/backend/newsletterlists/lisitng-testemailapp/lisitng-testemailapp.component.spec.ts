import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisitngTestemailappComponent } from './lisitng-testemailapp.component';

describe('LisitngTestemailappComponent', () => {
  let component: LisitngTestemailappComponent;
  let fixture: ComponentFixture<LisitngTestemailappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisitngTestemailappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisitngTestemailappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
