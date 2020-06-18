import { NgModule } from '@angular/core';
import {
    AuthenticationService,
    UsersService,
    CommonService,
    EmployeeService,
    OrganizationService,
    EnterpriseService,
    
} from './'


@NgModule({
    providers: [
        AuthenticationService,
        UsersService,
        CommonService,
        EmployeeService,
        OrganizationService,
        EnterpriseService
    ]
})

export class ServicesModule {

}