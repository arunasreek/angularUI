import { NgModule } from '@angular/core';
import {
    AuthenticationService,
    UsersService,
    CommonService,
    EmployeeService
    
} from './'


@NgModule({
    providers: [
        AuthenticationService,
        UsersService,
        CommonService,
        EmployeeService
    ]
})

export class ServicesModule {

}