import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAdvoComponent } from './social-advo.component';

describe('SocialAdvoComponent', () => {
  let component: SocialAdvoComponent;
  let fixture: ComponentFixture<SocialAdvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAdvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAdvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
