import { Component } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { Router } from '@angular/router';

import { AuthenticationService } from './services';
import { IToken } from './models';
import { Location } from '@angular/common';
import { NotificationPopup } from './models/notification-popup.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cpg';
  currentUser: IToken;
  currentUserSubscription: Subscription;
  isNavbarShow: boolean;
  route: string;
  notificationStream$: Observable<NotificationPopup>;


  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    location: Location
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {

      this.currentUser = user;
    });


    if (this.authenticationService.currentUserValue) {
      if (this.authenticationService.currentUserValue.roles.split(',').indexOf('SuperAdmin') > -1) {
        this.isNavbarShow = false;
      } else {
        this.isNavbarShow = false;
      }
    }
  }

  ngOnInit() {

  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }
}
