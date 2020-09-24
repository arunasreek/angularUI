import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinfisYearClosingComponent } from './finfis-year-closing.component';

describe('FinfisYearClosingComponent', () => {
  let component: FinfisYearClosingComponent;
  let fixture: ComponentFixture<FinfisYearClosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinfisYearClosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinfisYearClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
