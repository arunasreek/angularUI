import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart5Component } from './line-chart5.component';

describe('LineChart5Component', () => {
  let component: LineChart5Component;
  let fixture: ComponentFixture<LineChart5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChart5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
