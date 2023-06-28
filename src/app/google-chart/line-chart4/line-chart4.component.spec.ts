import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart4Component } from './line-chart4.component';

describe('LineChart4Component', () => {
  let component: LineChart4Component;
  let fixture: ComponentFixture<LineChart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
