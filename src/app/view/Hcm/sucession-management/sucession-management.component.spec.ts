import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessionManagementComponent } from './sucession-management.component';

describe('SucessionManagementComponent', () => {
  let component: SucessionManagementComponent;
  let fixture: ComponentFixture<SucessionManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessionManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
