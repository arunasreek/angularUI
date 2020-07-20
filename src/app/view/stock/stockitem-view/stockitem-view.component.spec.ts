import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockitemViewComponent } from './stockitem-view.component';

describe('StockitemViewComponent', () => {
  let component: StockitemViewComponent;
  let fixture: ComponentFixture<StockitemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockitemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockitemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
