import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobgroupComponent } from './jobgroup.component';

describe('JobgroupComponent', () => {
  let component: JobgroupComponent;
  let fixture: ComponentFixture<JobgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
