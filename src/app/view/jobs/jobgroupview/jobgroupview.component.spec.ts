import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobgroupviewComponent } from './jobgroupview.component';

describe('JobgroupviewComponent', () => {
  let component: JobgroupviewComponent;
  let fixture: ComponentFixture<JobgroupviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobgroupviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobgroupviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
