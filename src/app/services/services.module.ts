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

    EmployerService,
    ProjectService,
    WarehouseService,
    CharofAcctsService,

    
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

        CustomerService,
        EmployerService,
        ProjectService,
        WarehouseService,
        CharofAcctsService ,

        CustomerService 

    ]
})

export class ServicesModule {

}