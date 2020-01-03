import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSenderappComponent } from './listing-senderapp.component';

describe('ListingSenderappComponent', () => {
  let component: ListingSenderappComponent;
  let fixture: ComponentFixture<ListingSenderappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingSenderappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSenderappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
