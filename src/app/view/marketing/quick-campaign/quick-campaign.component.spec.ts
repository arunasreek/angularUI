import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCampaignComponent } from './quick-campaign.component';

describe('QuickCampaignComponent', () => {
  let component: QuickCampaignComponent;
  let fixture: ComponentFixture<QuickCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
