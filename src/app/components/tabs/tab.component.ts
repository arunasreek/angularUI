/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',  
  template: `
    <div  class="tab-content manage__user pb-100" [hidden]="!active">
    <div class="tab-pane fade card" [ngClass]="{'show active': active}">
    <div class="manage__form card-body">
      <ng-content></ng-content>
      </div>
      </div>
    </div>
  `
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input('numberRequired') numberRequired:boolean 
  @Input() active = false;
}
