import { NgModule } from '@angular/core';
import {
   
    AuthenticationService,
    AlertService,
    UsersService

} from './'

@NgModule({
    providers: [
        AuthenticationService,
        AlertService,
        UsersService
    ]
})

export class ServicesModule {

}