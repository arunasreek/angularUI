import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobclassviewComponent } from './jobclassview.component';

describe('JobclassviewComponent', () => {
  let component: JobclassviewComponent;
  let fixture: ComponentFixture<JobclassviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobclassviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobclassviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
