import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSubscriptionComponent } from './listing-subscription.component';

describe('ListingSubscriptionComponent', () => {
  let component: ListingSubscriptionComponent;
  let fixture: ComponentFixture<ListingSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
