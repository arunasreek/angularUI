import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupdefinitionComponent } from './groupdefinition.component';

describe('GroupdefinitionComponent', () => {
  let component: GroupdefinitionComponent;
  let fixture: ComponentFixture<GroupdefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupdefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupdefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
