import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalVocherViewComponent } from './journal-vocher-view.component';

describe('JournalVocherViewComponent', () => {
  let component: JournalVocherViewComponent;
  let fixture: ComponentFixture<JournalVocherViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalVocherViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalVocherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
