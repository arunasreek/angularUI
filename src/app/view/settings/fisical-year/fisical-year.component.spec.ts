import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisicalYearComponent } from './fisical-year.component';

describe('FisicalYearComponent', () => {
  let component: FisicalYearComponent;
  let fixture: ComponentFixture<FisicalYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisicalYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisicalYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
