import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcChartComponent } from './purc-chart.component';

describe('PurcChartComponent', () => {
  let component: PurcChartComponent;
  let fixture: ComponentFixture<PurcChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurcChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
