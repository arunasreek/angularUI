import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../services';
import { IToken, IUserDashboardAccess } from 'src/app/models';
import { DashboardItem } from '../../../enum';
import { DashboardService } from 'src/app/services';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent {
    @Input('user') currentUser: IToken;

    IsSuperAdmin: boolean;
    routeUrl: string;
    DashboardItem = DashboardItem;
    userDashBoardList: IUserDashboardAccess[];

    constructor(private dashboardService: DashboardService,
        private authenticationService: AuthenticationService, private route: Router,
    ) {

    }

    ngOnInit() {
        this.routeUrl = this.route.url;
        let userData = this.authenticationService.currentUserValue;
        if (userData) {
            this.getUserDashBoard(userData.orgId, userData.userId);
        }
    }


    getUserDashBoard(orgID: number, userId: string) {
        this.dashboardService.getUserDashboard(orgID, userId).subscribe((data: any) => {
            if (data.success) {
                if(data.result){
                    this.userDashBoardList = data.result.userDashboardAccess;
                }
               
            }
        })
    }


}