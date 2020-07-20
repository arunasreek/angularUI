import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseQuotationViewComponent } from './purchase-quotation-view.component';

describe('PurchaseQuotationViewComponent', () => {
  let component: PurchaseQuotationViewComponent;
  let fixture: ComponentFixture<PurchaseQuotationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseQuotationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseQuotationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
