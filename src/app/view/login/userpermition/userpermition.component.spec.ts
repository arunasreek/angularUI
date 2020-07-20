import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpermitionComponent } from './userpermition.component';

describe('UserpermitionComponent', () => {
  let component: UserpermitionComponent;
  let fixture: ComponentFixture<UserpermitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpermitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpermitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
