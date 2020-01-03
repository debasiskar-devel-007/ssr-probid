import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesreplistsComponent } from './salesreplists.component';

describe('SalesreplistsComponent', () => {
  let component: SalesreplistsComponent;
  let fixture: ComponentFixture<SalesreplistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesreplistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesreplistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
