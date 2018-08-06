import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallEarningsComponent } from './overall-earnings.component';

describe('OverallEarningsComponent', () => {
  let component: OverallEarningsComponent;
  let fixture: ComponentFixture<OverallEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
