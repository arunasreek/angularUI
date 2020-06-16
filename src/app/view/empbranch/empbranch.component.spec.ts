import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpbranchComponent } from './empbranch.component';

describe('EmpbranchComponent', () => {
  let component: EmpbranchComponent;
  let fixture: ComponentFixture<EmpbranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpbranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
