import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirddogListComponent } from './birddog-list.component';

describe('BirddogListComponent', () => {
  let component: BirddogListComponent;
  let fixture: ComponentFixture<BirddogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirddogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirddogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
