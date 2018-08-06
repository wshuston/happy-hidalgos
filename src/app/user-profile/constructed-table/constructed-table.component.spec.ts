import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructedTableComponent } from './constructed-table.component';

describe('ConstructedTableComponent', () => {
  let component: ConstructedTableComponent;
  let fixture: ComponentFixture<ConstructedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
