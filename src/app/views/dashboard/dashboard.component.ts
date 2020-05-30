import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IDashboardKPIs, IDashboardOrgs, IUserDashboardAccess } from '../../models';
import { DashboardService, AuthenticationService } from 'src/app/services';
import { AppComponent } from '../../app.component';
import { getLoggedInOrganizationId } from '../../utils/index'
import { OrgStatus } from '../../enum'




@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
    dashboradKPIs: IDashboardKPIs;
    dashboardOrgs: IDashboardOrgs[];
    userDashBoardList: IUserDashboardAccess[];

    OrgStatus = OrgStatus;

    constructor(private dashboardService: DashboardService,
        private route: Router,
        private authenticationService: AuthenticationService,
        public myapp: AppComponent) {
    }

    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            if (this.authenticationService.currentUserValue.roles.split(',').indexOf('SuperAdmin') > -1) {
                this.getKPIs();
                this.getOrgs();
            } else {
                this.route.navigate([`/user/dashboard`]);
            }
        }
    }

    getKPIs() {
        this.dashboardService.getDashboardKPIs().subscribe((data: IDashboardKPIs) => {
            this.dashboradKPIs = data;
        })
    }

    getOrgs() {
        this.dashboardService.getDashboardOrgs().subscribe((data: IDashboardOrgs[]) => {
            this.dashboardOrgs = data;
        })
    }

    onOrgEdit(id: number) {
        this.route.navigate([`/organisation/edit/${id}`]);
    }

    onOrgManageUser(id: number, name: string) {
        this.route.navigate([`/users/${name}/${id}`], { state: { data: { orgName: name } } });
    }

    onDataIngestion(id: number) {
        this.route.navigate([`/data-ingestion/${id}`]);
        this.myapp.isNavbarShow
    }

    showDashBoard(id: number) {
        this.route.navigate([`/user/dashboard/${id}`]);
        this.myapp.isNavbarShow = true;
        getLoggedInOrganizationId(id);

        this.authenticationService.getOrgDetails(id).subscribe((res: any) => {
            if (res) {
                this.authenticationService.currentUserValue.orgName = res.organisation[0].orgName;
            }
        });
    }


    ngAfterViewInit(): void {
        setTimeout(() => {
            this.myapp.isNavbarShow = false;
        });
    }
}