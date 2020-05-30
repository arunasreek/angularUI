import { Component, ContentChildren, QueryList, AfterContentInit, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
})
export class AccordionComponent {
  @Input("tabIndex") tabIndex: number;
  @Input("lastItem") lastItem: number;
}
