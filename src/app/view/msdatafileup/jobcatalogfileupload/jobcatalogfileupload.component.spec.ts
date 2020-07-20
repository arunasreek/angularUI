import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcatalogfileuploadComponent } from './jobcatalogfileupload.component';

describe('JobcatalogfileuploadComponent', () => {
  let component: JobcatalogfileuploadComponent;
  let fixture: ComponentFixture<JobcatalogfileuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcatalogfileuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobcatalogfileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
