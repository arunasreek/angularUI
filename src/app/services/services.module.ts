import { NgModule } from '@angular/core';
import {
    AuthenticationService,
    UsersService,
    CommonService,
    EmployeeService,
    OrganizationService,
    EnterpriseService,
    EmployerBranchesService,
    CustomerService ,

    
} from './'


@NgModule({
    providers: [
        AuthenticationService,
        UsersService,
        CommonService,
        EmployeeService,
        OrganizationService,
        EnterpriseService,
        EmployerBranchesService,
        CustomerService 
    ]
})

export class ServicesModule {

}