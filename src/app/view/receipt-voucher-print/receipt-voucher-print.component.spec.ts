import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptVoucherPrintComponent } from './receipt-voucher-print.component';

describe('ReceiptVoucherPrintComponent', () => {
  let component: ReceiptVoucherPrintComponent;
  let fixture: ComponentFixture<ReceiptVoucherPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptVoucherPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptVoucherPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
