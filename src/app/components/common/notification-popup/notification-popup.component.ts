import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable, merge, fromEvent, combineLatest, interval } from 'rxjs';
import { map, startWith, tap, switchMap, filter } from 'rxjs/operators';
import { NotificationPopup } from '../../../models/notification-popup.model';
import { CommonService } from '../../../services';

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.css']
})
export class NotificationPopupComponent {
  @Input('notification$') notification$: Observable<NotificationPopup>;
  @ViewChild('notificationPopup')
  smallContainer: ElementRef;
  isHover$: Observable<boolean>;
  showNotification: boolean;

  constructor(private commonService: CommonService, ) { }

  ngOnInit() {
    
  }

 
}
