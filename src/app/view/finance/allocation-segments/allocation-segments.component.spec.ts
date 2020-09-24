import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationSegmentsComponent } from './allocation-segments.component';

describe('AllocationSegmentsComponent', () => {
  let component: AllocationSegmentsComponent;
  let fixture: ComponentFixture<AllocationSegmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationSegmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationSegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
