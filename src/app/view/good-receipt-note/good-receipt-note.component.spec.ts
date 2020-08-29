import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodReceiptNoteComponent } from './good-receipt-note.component';

describe('GoodReceiptNoteComponent', () => {
  let component: GoodReceiptNoteComponent;
  let fixture: ComponentFixture<GoodReceiptNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodReceiptNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodReceiptNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
