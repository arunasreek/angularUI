import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { EmployeeComponent } from './view/employee/employee.component';
import { TopmenuComponent } from './shared/topmenu/topmenu.component';
//services module
import { ServicesModule } from './services/services.module';

//helpers module
import { HelpersModule } from './helpers/helpers.module';

//config module
import { AppConfigModule, AppConfig } from './config/app.config.module';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EnterpriseComponent } from './view/enterprise/enterprise.component';
import { EmployerComponent } from './view/employer/employer.component';
import { EmpbranchComponent } from './view/empbranch/empbranch.component';
import { OrganizationComponent } from './view/organization/organization.component';
import { ProjectComponent } from './view/project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    EmployeeComponent,
    TopmenuComponent,
    EnterpriseComponent,
    EmployerComponent,
    EmpbranchComponent,
    OrganizationComponent,
    ProjectComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    HelpersModule,
    AppConfigModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot() 
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
