import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { LoadingBarService } from '@ngx-loading-bar/core';


//import { User } from '../../../models';
import { AuthenticationService, CommonService } from '../../../services';
import { IToken, IPushNotificationModel } from 'src/app/models';
import { getLocalDateTime } from '../../../utils/index'

import { AppComponent } from '../../../app.component';
import { ProcessState } from '../../../enum/processState';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html'
})

export class TopbarComponent {
    @Input('user') currentUser: IToken;
    IsSuperAdmin: boolean;
    currentRoute: string;
    pushUserNotificationAggregates: IPushNotificationModel[];
    private alive: boolean;
    pushUserNotificationCount: number;

    ProcessState = ProcessState;


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        public myapp: AppComponent,
        private commonService: CommonService,
        private loadingBar: LoadingBarService
    ) {

    }

    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            if (this.authenticationService.currentUserValue.roles.split(',').indexOf('SuperAdmin') > -1) {
                this.IsSuperAdmin = true;
            }
            this.getPushNotification();
            this.intervalCheck();
        }

        setTimeout(() => {
            this.onSidebarToggleClick()
        });

    }

    logout() {
        setTimeout(() => {
            this.myapp.isNavbarShow = false;
        });
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    intervalCheck() {
        let interval = setInterval(() => {
            this.getPushNotification();
        }, 5000);
    }

    getPushNotification() {
        this.commonService.getPushNotifications().subscribe((res: any) => {
            if (res.success) {
                this.pushUserNotificationAggregates = res.result.pushUserNotificationAggregates;

                if (this.pushUserNotificationAggregates) {
                    this.pushUserNotificationCount = this.pushUserNotificationAggregates.filter(x => {
                        return !x.isSeen;
                    }).length;
                }

                if (res.result.pushUserNotificationAggregates.length > 0) {
                    res.result.pushUserNotificationAggregates.forEach(element => {
                        element.createdDate = element.createdDate ? getLocalDateTime(element.createdDate) : null;
                    });
                }
            }
        });
    }

    updateNotification(notificationId: number) {
        this.commonService.updatePushNotification(notificationId).subscribe((res: any) => {
            if (res.success) {
                this.getPushNotification();
            }
        });
    }

    onSidebarToggleClick() {
        if ($('.sidebar').hasClass('sidebar__open')) {
            $('.sidebar__toggle__btn').removeClass('toggle');
            $('.sidebar').removeClass('sidebar__open');
            $('.container-fluid').addClass('expand');
        } else {
            $('.sidebar__toggle__btn').addClass('toggle');
            $('.sidebar').addClass('sidebar__open');
            $('.container-fluid').removeClass('expand');
        }
    }

    onProfileEdit(orgId: number, userId: string) {
        this.router.navigate([`/user/profile/${orgId}/${userId}`]);
    }

}