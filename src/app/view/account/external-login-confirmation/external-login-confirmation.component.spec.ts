import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLoginConfirmationComponent } from './external-login-confirmation.component';

describe('ExternalLoginConfirmationComponent', () => {
  let component: ExternalLoginConfirmationComponent;
  let fixture: ComponentFixture<ExternalLoginConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalLoginConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalLoginConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
