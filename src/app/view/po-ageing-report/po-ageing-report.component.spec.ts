import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoAgeingReportComponent } from './po-ageing-report.component';

describe('PoAgeingReportComponent', () => {
  let component: PoAgeingReportComponent;
  let fixture: ComponentFixture<PoAgeingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoAgeingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoAgeingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
