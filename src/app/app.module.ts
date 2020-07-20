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
import { CustomerComponent } from './view/customer/customer.component';
import { ServiceCreationComponent } from './view/service-creation/service-creation.component';
import { ConfirmEmailComponent } from './view/account/confirm-email/confirm-email.component';
import { ChartOfAcctsComponent } from './view/financial/chart-of-accts/chart-of-accts.component';
import { JournalVoucherComponent } from './view/financial/journal-voucher/journal-voucher.component';
import { PaymentVoucherComponent } from './view/financial/payment-voucher/payment-voucher.component';
import { ReceiptVoucherComponent } from './view/financial/receipt-voucher/receipt-voucher.component';
import { AssetComponent } from './view/financial/asset/asset.component';
import { LoginComponent } from './view/account/login/login.component';
import { VerifyCodeComponent } from './view/account/verify-code/verify-code.component';
import { SendCodeComponent } from './view/account/send-code/send-code.component';
import { ResetPasswordConfirmationComponent } from './view/account/reset-password-confirmation/reset-password-confirmation.component';
import { ResetPasswordComponent } from './view/account/reset-password/reset-password.component';
import { RegisterComponent } from './view/account/register/register.component';
import { ForgotPasswordComponent } from './view/account/forgot-password/forgot-password.component';
import { ForgotPasswordConfirmationComponent } from './view/account/forgot-password-confirmation/forgot-password-confirmation.component';
import { ExternalLoginFailureComponent } from './view/account/external-login-failure/external-login-failure.component';
import { ExternalLoginConfirmationComponent } from './view/account/external-login-confirmation/external-login-confirmation.component';
import { JvPrintComponent } from './view/financial/jv-print/jv-print.component';
import { JournalVocherViewComponent } from './view/financial/journal-vocher-view/journal-vocher-view.component';
import { AboutComponent } from './view/home/about/about.component';
import { ContactComponent } from './view/home/contact/contact.component';
import { IndexComponent } from './view/home/index/index.component';
import { JobcatalogfileuploadComponent } from './view/msdatafileup/jobcatalogfileupload/jobcatalogfileupload.component';
import { DashboardComponent } from './view/login/dashboard/dashboard.component';
import { GroupdefinitionComponent } from './view/login/groupdefinition/groupdefinition.component';
import { LoginComponent } from './view/login/login/login.component';
import { UsercreationComponent } from './view/login/usercreation/usercreation.component';
import { UserpermitionComponent } from './view/login/userpermition/userpermition.component';
import { AddPhoneNumberComponent } from './view/manage/add-phone-number/add-phone-number.component';
import { ChangePasswordComponent } from './view/manage/change-password/change-password.component';
import { IndexComponent } from './view/manage/index/index.component';
import { ManageLoginsComponent } from './view/manage/manage-logins/manage-logins.component';
import { SetPasswordComponent } from './view/manage/set-password/set-password.component';
import { VerifyPhoneComponent } from './view/manage/verify-phone/verify-phone.component';
import { DummyComponent } from './view/jobs/dummy/dummy.component';

import { JobcatalougeComponent } from './view/jobs/jobcatalouge/jobcatalouge.component';
import { JobcategoryComponent } from './view/jobs/jobcategory/jobcategory.component';
import { JobcategoryviewComponent } from './view/jobs/jobcategoryview/jobcategoryview.component';
import { JobclassComponent } from './view/jobs/jobclass/jobclass.component';
import { JobclassviewComponent } from './view/jobs/jobclassview/jobclassview.component';
import { JobgroupComponent } from './view/jobs/jobgroup/jobgroup.component';
import { JobgroupviewComponent } from './view/jobs/jobgroupview/jobgroupview.component';
import { ProjectsComponent } from './view/jobs/projects/projects.component';

import { MaterialRequisitionComponent } from './view/procurment/material-requisition/material-requisition.component';
import { MaterialRequisitionViewComponent } from './view/procurment/material-requisition-view/material-requisition-view.component';
import { PurchaseOrderComponent } from './view/procurment/purchase-order/purchase-order.component';
import { PurchaseQuotationComponent } from './view/procurment/purchase-quotation/purchase-quotation.component';
import { PurchaseQuotationViewComponent } from './view/procurment/purchase-quotation-view/purchase-quotation-view.component';
import { PurchaseRequisitionComponent } from './view/procurment/purchase-requisition/purchase-requisition.component';
import { PurchaseRequisitionViewComponent } from './view/procurment/purchase-requisition-view/purchase-requisition-view.component';
import { ErrorComponent } from './view/shared/error/error.component';
import { LockoutComponent } from './view/shared/lockout/lockout.component';
import { FloorComponent } from './view/stock/floor/floor.component';
import { FloorViewComponent } from './view/stock/floor-view/floor-view.component';
import { ItemCategoryComponent } from './view/stock/item-category/item-category.component';
import { ItemCategoryViewComponent } from './view/stock/item-category-view/item-category-view.component';
import { ApproveComponent } from './view/reports/approve/approve.component';
import { ApproveStatusComponent } from './view/reports/approve-status/approve-status.component';
import { GeneralledgeComponent } from './view/reports/generalledge/generalledge.component';
import { GeneralledgeprintComponent } from './view/reports/generalledgeprint/generalledgeprint.component';
import { TradingaccountComponent } from './view/reports/tradingaccount/tradingaccount.component';
import { ItemgroupComponent } from './view/stock/itemgroup/itemgroup.component';
import { ItemgroupViewComponent } from './view/stock/itemgroup-view/itemgroup-view.component';
import { RackComponent } from './view/stock/rack/rack.component';
import { RackViewComponent } from './view/stock/rack-view/rack-view.component';
import { RowComponent } from './view/stock/row/row.component';
import { RowViewComponent } from './view/stock/row-view/row-view.component';
import { StockitemComponent } from './view/stock/stockitem/stockitem.component';
import { StockitemViewComponent } from './view/stock/stockitem-view/stockitem-view.component';
import { SalesEnquiryComponent } from './view/sales/sales-enquiry/sales-enquiry.component';
import { OutgoingQuotationComponent } from './view/sales/outgoing-quotation/outgoing-quotation.component';
import { SalesOrderComponent } from './view/sales/sales-order/sales-order.component';


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
    CustomerComponent,
    ServiceCreationComponent,
    ConfirmEmailComponent,
    ChartOfAcctsComponent,
    JournalVoucherComponent,
    PaymentVoucherComponent,
    ReceiptVoucherComponent,
    AssetComponent,
    LoginComponent,
    VerifyCodeComponent,
    SendCodeComponent,
    ResetPasswordConfirmationComponent,
    ResetPasswordComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ForgotPasswordConfirmationComponent,
    ExternalLoginFailureComponent,
    ExternalLoginConfirmationComponent,
    JvPrintComponent,
    JournalVocherViewComponent,
    AboutComponent,
    ContactComponent,
    IndexComponent,
    JobcatalogfileuploadComponent,
    DashboardComponent,
    GroupdefinitionComponent,
    LoginComponent,
    UsercreationComponent,
    UserpermitionComponent,
    AddPhoneNumberComponent,
    ChangePasswordComponent,
    IndexComponent,
    ManageLoginsComponent,
    SetPasswordComponent,
    VerifyPhoneComponent,
    DummyComponent,
    FloorComponent,
    JobcatalougeComponent,
    JobcategoryComponent,
    JobcategoryviewComponent,
    JobclassComponent,
    JobclassviewComponent,
    JobgroupComponent,
    JobgroupviewComponent,
    ProjectsComponent,
    RackComponent,
    RowComponent,
    MaterialRequisitionComponent,
    MaterialRequisitionViewComponent,
    PurchaseOrderComponent,
    PurchaseQuotationComponent,
    PurchaseQuotationViewComponent,
    PurchaseRequisitionComponent,
    PurchaseRequisitionViewComponent,
    ErrorComponent,
    LockoutComponent,
    FloorComponent,
    FloorViewComponent,
    ItemCategoryComponent,
    ItemCategoryViewComponent,
    ItemgroupComponent,
    ItemgroupViewComponent,
    RackComponent,
    RackViewComponent,
    RowComponent,
    RowViewComponent,
    StockitemComponent,
    StockitemViewComponent,
    ApproveComponent,
    ApproveStatusComponent,
    GeneralledgeComponent,
    GeneralledgeprintComponent,
    TradingaccountComponent,
    SalesEnquiryComponent,
    OutgoingQuotationComponent,
    SalesOrderComponent,
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
