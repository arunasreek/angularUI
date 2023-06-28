import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompitetorsComponent } from './compitetors.component';

describe('CompitetorsComponent', () => {
  let component: CompitetorsComponent;
  let fixture: ComponentFixture<CompitetorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompitetorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompitetorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
