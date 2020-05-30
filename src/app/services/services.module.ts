import { NgModule } from '@angular/core';
import {
    AlertService,
    AuthenticationService,
    BrandLevelService,
    CycleService,
    StatusService,
    SubscriptionService,
    DashboardService,
    OrganisationService,
    DropdownService,
    UsersService,
    RolesService,
    AdminRoleServices,
    DataIngestionServices,
    QuarterService,
    ProcessService,
    ApprovalsService,
    CommonService

} from './'

@NgModule({
    providers: [AlertService,
        AuthenticationService,
        BrandLevelService,
        CycleService,
        StatusService,
        SubscriptionService,
        DashboardService,
        OrganisationService,
        DropdownService,
        UsersService,
        RolesService,
        AdminRoleServices,
        DataIngestionServices,
        QuarterService,
        ProcessService,
        ApprovalsService,
        CommonService
    ]
})

export class ServicesModule {

}