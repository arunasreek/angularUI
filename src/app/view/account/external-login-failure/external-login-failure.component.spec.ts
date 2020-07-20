import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLoginFailureComponent } from './external-login-failure.component';

describe('ExternalLoginFailureComponent', () => {
  let component: ExternalLoginFailureComponent;
  let fixture: ComponentFixture<ExternalLoginFailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalLoginFailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalLoginFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
