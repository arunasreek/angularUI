import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequisitionViewComponent } from './material-requisition-view.component';

describe('MaterialRequisitionViewComponent', () => {
  let component: MaterialRequisitionViewComponent;
  let fixture: ComponentFixture<MaterialRequisitionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialRequisitionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRequisitionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
