import { NgModule } from '@angular/core';
import {
   
    AuthenticationService,
    AlertService

} from './'

@NgModule({
    providers: [
        AuthenticationService,
        AlertService
    ]
})

export class ServicesModule {

}