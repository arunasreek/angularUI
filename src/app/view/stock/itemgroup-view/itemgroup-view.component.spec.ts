import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemgroupViewComponent } from './itemgroup-view.component';

describe('ItemgroupViewComponent', () => {
  let component: ItemgroupViewComponent;
  let fixture: ComponentFixture<ItemgroupViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemgroupViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemgroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
