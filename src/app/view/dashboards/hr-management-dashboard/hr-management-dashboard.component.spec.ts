import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManagementDashboardComponent } from './hr-management-dashboard.component';

describe('HrManagementDashboardComponent', () => {
  let component: HrManagementDashboardComponent;
  let fixture: ComponentFixture<HrManagementDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrManagementDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManagementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
