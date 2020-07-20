import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcatalougeComponent } from './jobcatalouge.component';

describe('JobcatalougeComponent', () => {
  let component: JobcatalougeComponent;
  let fixture: ComponentFixture<JobcatalougeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcatalougeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobcatalougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
