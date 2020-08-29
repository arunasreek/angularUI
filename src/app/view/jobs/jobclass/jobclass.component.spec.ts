import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobclassComponent } from './jobclass.component';

describe('JobclassComponent', () => {
  let component: JobclassComponent;
  let fixture: ComponentFixture<JobclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
