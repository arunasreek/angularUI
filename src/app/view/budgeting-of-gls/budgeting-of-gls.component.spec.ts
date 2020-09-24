import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetingOfGLsComponent } from './budgeting-of-gls.component';

describe('BudgetingOfGLsComponent', () => {
  let component: BudgetingOfGLsComponent;
  let fixture: ComponentFixture<BudgetingOfGLsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetingOfGLsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetingOfGLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
