import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinfisMonthClosingComponent } from './finfis-month-closing.component';

describe('FinfisMonthClosingComponent', () => {
  let component: FinfisMonthClosingComponent;
  let fixture: ComponentFixture<FinfisMonthClosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinfisMonthClosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinfisMonthClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
