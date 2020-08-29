import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvPrintComponent } from './jv-print.component';

describe('JvPrintComponent', () => {
  let component: JvPrintComponent;
  let fixture: ComponentFixture<JvPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
