import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAdjustmentNoteComponent } from './stock-adjustment-note.component';

describe('StockAdjustmentNoteComponent', () => {
  let component: StockAdjustmentNoteComponent;
  let fixture: ComponentFixture<StockAdjustmentNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockAdjustmentNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAdjustmentNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
