import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingQuotationComponent } from './outgoing-quotation.component';

describe('OutgoingQuotationComponent', () => {
  let component: OutgoingQuotationComponent;
  let fixture: ComponentFixture<OutgoingQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutgoingQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
