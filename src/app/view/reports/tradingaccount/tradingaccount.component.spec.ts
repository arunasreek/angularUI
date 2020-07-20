import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingaccountComponent } from './tradingaccount.component';

describe('TradingaccountComponent', () => {
  let component: TradingaccountComponent;
  let fixture: ComponentFixture<TradingaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
