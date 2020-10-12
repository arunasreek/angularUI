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
    ReceiptService,
    PoliciesService,
    ProcurementService,
    JournalService,
    AssestsService,
    LinkService,
    TaskService,
    
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

        CustomerService,
        ReceiptService ,
        PoliciesService,
        ProcurementService,
        JournalService,
        AssestsService,
        LinkService,
        TaskService

    ]
})

export class ServicesModule {

}