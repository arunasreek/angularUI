import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralledgeComponent } from './generalledge.component';

describe('GeneralledgeComponent', () => {
  let component: GeneralledgeComponent;
  let fixture: ComponentFixture<GeneralledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
