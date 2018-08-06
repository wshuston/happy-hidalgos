import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallRateComponent } from './overall-rate.component';

describe('OverallRateComponent', () => {
  let component: OverallRateComponent;
  let fixture: ComponentFixture<OverallRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
