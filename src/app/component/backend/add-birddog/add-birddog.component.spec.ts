import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBirddogComponent } from './add-birddog.component';

describe('AddBirddogComponent', () => {
  let component: AddBirddogComponent;
  let fixture: ComponentFixture<AddBirddogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBirddogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBirddogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
