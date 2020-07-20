import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralledgeprintComponent } from './generalledgeprint.component';

describe('GeneralledgeprintComponent', () => {
  let component: GeneralledgeprintComponent;
  let fixture: ComponentFixture<GeneralledgeprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralledgeprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralledgeprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
