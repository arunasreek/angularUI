import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcategoryviewComponent } from './jobcategoryview.component';

describe('JobcategoryviewComponent', () => {
  let component: JobcategoryviewComponent;
  let fixture: ComponentFixture<JobcategoryviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcategoryviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobcategoryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
