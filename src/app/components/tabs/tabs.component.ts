/**
 * The main component that renders single TabComponent
 * instances.
 */

import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  template: `
      <ul class="nav nav-tabs manage__org__nav">
        <li class="nav-item" *ngFor="let tab of tabs;let i=index" (click)="selectTab(tab)" >
          <a href="#" class="nav-link" [class.active]="tab.active" data-toggle="tab" role="tab" aria-selected="true">
          <span class="nav-steps-no" [ngClass]="{'d-none':!tab.numberRequired}">{{i+1}}</span>
          {{tab.title}}
          </a>
        </li>
      </ul>
      <ng-content></ng-content>
    `
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: any) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
