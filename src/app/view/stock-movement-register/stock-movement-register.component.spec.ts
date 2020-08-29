import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMovementRegisterComponent } from './stock-movement-register.component';

describe('StockMovementRegisterComponent', () => {
  let component: StockMovementRegisterComponent;
  let fixture: ComponentFixture<StockMovementRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMovementRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMovementRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
