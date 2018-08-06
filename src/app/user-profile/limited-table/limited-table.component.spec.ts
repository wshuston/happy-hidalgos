import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedTableComponent } from './limited-table.component';

describe('LimitedTableComponent', () => {
  let component: LimitedTableComponent;
  let fixture: ComponentFixture<LimitedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
