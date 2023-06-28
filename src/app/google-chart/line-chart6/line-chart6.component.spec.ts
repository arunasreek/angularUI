import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart6Component } from './line-chart6.component';

describe('LineChart6Component', () => {
  let component: LineChart6Component;
  let fixture: ComponentFixture<LineChart6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChart6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChart6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
