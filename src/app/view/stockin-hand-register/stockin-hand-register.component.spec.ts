import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinHandRegisterComponent } from './stockin-hand-register.component';

describe('StockinHandRegisterComponent', () => {
  let component: StockinHandRegisterComponent;
  let fixture: ComponentFixture<StockinHandRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinHandRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinHandRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
