import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysalesrepComponent } from './mysalesrep.component';

describe('MysalesrepComponent', () => {
  let component: MysalesrepComponent;
  let fixture: ComponentFixture<MysalesrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysalesrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysalesrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
