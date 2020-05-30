import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { ToastrModule } from 'ngx-toastr';

//components
import { ComponentsModule } from '../components/component.module';

// Prime NG Modules
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';

//views components
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { ManageDashboardComponent } from './dashboard/manage-dashboard/manage-dashboard.component';


@NgModule({
    declarations: [
        LoginComponent,
        DashboardComponent,
        ForgotPasswordComponent,
        ManageDashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ComponentsModule,
        DataTableModule,
        TableModule,
        InputSwitchModule,
        ToastModule,
        DialogModule,
        AccordionModule,
        MultiSelectModule,
        CheckboxModule,
        AutoCompleteModule
    ],
    exports: [],
    providers: [MessageService]
})

export class ViewsModule { }