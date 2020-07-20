import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAcctsComponent } from './chart-of-accts.component';

describe('ChartOfAcctsComponent', () => {
  let component: ChartOfAcctsComponent;
  let fixture: ComponentFixture<ChartOfAcctsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartOfAcctsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfAcctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
