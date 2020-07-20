import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErealtorsComponent } from './erealtors.component';

describe('ErealtorsComponent', () => {
  let component: ErealtorsComponent;
  let fixture: ComponentFixture<ErealtorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErealtorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErealtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
