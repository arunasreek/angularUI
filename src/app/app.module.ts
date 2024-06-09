import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AgGridModule } from 'ag-grid-angular';
import {NgxPaginationModule} from 'ngx-pagination';
import { GanttModule, ResizeService, SortService, FilterService, SelectionService, ReorderService,
  EditService, DayMarkersService, ToolbarService } from '@syncfusion/ej2-angular-gantt';
  import { GoogleChartModule } from './google-chart/google-chart.module';
  import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
  import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
  import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
  import interactionPlugin from '@fullcalendar/interaction';

  import { ChartsModule } from 'ng2-charts';

  FullCalendarModule.registerPlugins([ // register FullCalendar plugins
    dayGridPlugin,
    interactionPlugin
  ]);


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

// import { LoginComponent } from './view/login/login/login.component';


import { UsercreationComponent } from './view/login/usercreation/usercreation.component';
import { UserpermitionComponent } from './view/login/userpermition/userpermition.component';
import { AddPhoneNumberComponent } from './view/manage/add-phone-number/add-phone-number.component';
import { ChangePasswordComponent } from './view/manage/change-password/change-password.component';

// import { IndexComponent } from './view/manage/index/index.component';

// import { IndexComponent } from './view/manage/index/index.component';

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

import { SupplierInvoiceComponent } from './view/invoice/supplier-invoice/supplier-invoice.component';
import { CustomerInvoiceComponent } from './view/invoice/customer-invoice/customer-invoice.component';
// import { ContactComponent } from './view/contact/contact.component';
import { SalesOrderReportComponent } from './view/sales-order-report/sales-order-report.component';
import { PurchaseOrderReportComponent } from './view/purchase-order-report/purchase-order-report.component';

import { PoAgeingReportComponent } from './view/po-ageing-report/po-ageing-report.component';
import { StockAdjustmentNoteComponent } from './view/stock-adjustment-note/stock-adjustment-note.component';
import { StockinHandRegisterComponent } from './view/stockin-hand-register/stockin-hand-register.component';
import { StockMovementRegisterComponent } from './view/stock-movement-register/stock-movement-register.component';
import { DeliveryNoteComponent } from './view/delivery-note/delivery-note.component';
import { GoodReceiptNoteComponent } from './view/good-receipt-note/good-receipt-note.component';
import { SalesReturnsComponent } from './view/sales-returns/sales-returns.component';
import { PurchaseReturnsComponent } from './view/purchase-returns/purchase-returns.component';
import { SupplierComponent } from './view/supplier/supplier.component';
import { AllocationSegmentsComponent } from './view/finance/allocation-segments/allocation-segments.component';
import { FisicalYearComponent } from './view/settings/fisical-year/fisical-year.component';
import { FinfisYearClosingComponent } from './view/settings/finfis-year-closing/finfis-year-closing.component';
import { FinfisMonthClosingComponent } from './view/settings/finfis-month-closing/finfis-month-closing.component';

import { FinancialYearComponent } from './view/settings/financial-year/financial-year.component';
import { BudgetingOfGLsComponent } from './view/budgeting-of-gls/budgeting-of-gls.component';
import { CreditNoteComponent } from './view/financial/credit-note/credit-note.component';
import { DebitNoteComponent } from './view/financial/debit-note/debit-note.component';
import { AlertSettingsComponent } from './view/settings/alert-settings/alert-settings.component';
import { GroupCreationComponent } from './view/user-management/group-creation/group-creation.component';
import { FormManagementComponent } from './view/user-management/form-management/form-management.component';
import { UserManagementComponent } from './view/user-management/user-management/user-management.component';
import { CampaignComponent } from './view/marketing/campaign/campaign.component';
import { QuickCampaignComponent } from './view/marketing/quick-campaign/quick-campaign.component';
import { BankReconcilationComponent } from './view/finance/bank-reconcilation/bank-reconcilation.component';
import { GanttChartComponent } from './view/project-management/gantt-chart/gantt-chart.component';
import { LeadsComponent } from './view/crm/leads/leads.component';
import { CompitetorsComponent } from './view/crm/compitetors/compitetors.component';
import { CeoDashboardComponent } from './view/dashboards/ceo-dashboard/ceo-dashboard.component';
import { LogisticsDashboardComponent } from './view/dashboards/logistics-dashboard/logistics-dashboard.component';
import { HrManagementDashboardComponent } from './view/dashboards/hr-management-dashboard/hr-management-dashboard.component';
import { FinancialDashboardComponent } from './view/dashboards/financial-dashboard/financial-dashboard.component';
import { ProjectDashboardComponent } from './view/dashboards/project-dashboard/project-dashboard.component';
import { GeneralDashboardComponent } from './view/dashboards/general-dashboard/general-dashboard.component';
import { PurchaseDashboardComponent } from './view/dashboards/purchase-dashboard/purchase-dashboard.component';
import { EmployeeGroupComponent } from './view/Hcm/employee-group/employee-group.component';
import { SucessionManagementComponent } from './view/Hcm/sucession-management/sucession-management.component';
import { UOMComponent } from './view/uom/uom.component';
import { WareHouse } from './view/stock/WareHouse/warehouse.component';


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

    SupplierInvoiceComponent,
    CustomerInvoiceComponent,
    ContactComponent,
    SalesOrderReportComponent,
    PurchaseOrderReportComponent,
    PoAgeingReportComponent,
    StockAdjustmentNoteComponent,
    StockinHandRegisterComponent,
    StockMovementRegisterComponent,
    DeliveryNoteComponent,
    GoodReceiptNoteComponent,
    SalesReturnsComponent,
    PurchaseReturnsComponent,
    SupplierComponent,
    AllocationSegmentsComponent,
    FisicalYearComponent,
    FinfisYearClosingComponent,
    FinfisMonthClosingComponent,
    
    FinancialYearComponent,
    
    BudgetingOfGLsComponent,
    
    CreditNoteComponent,
    
    DebitNoteComponent,
    
    AlertSettingsComponent,
    
    GroupCreationComponent,
    
    FormManagementComponent,
    
    UserManagementComponent,
    
    CampaignComponent,
    
    QuickCampaignComponent,
    
    BankReconcilationComponent,
    
    GanttChartComponent,
    
    LeadsComponent,
    
    CompitetorsComponent,
    
    CeoDashboardComponent,
    
    LogisticsDashboardComponent,
    
    HrManagementDashboardComponent,
    PurchaseDashboardComponent,
    
    FinancialDashboardComponent,
    
    ProjectDashboardComponent,
    
    GeneralDashboardComponent,
    
    EmployeeGroupComponent,
    
    SucessionManagementComponent,
    UOMComponent,
    WareHouse
  ],
  imports: [
    HttpClientModule,
    ChartsModule,
    FullCalendarModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ServicesModule,
    HelpersModule,
   CalendarModule,
    AppConfigModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    GanttModule,
  GoogleChartModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AgGridModule.withComponents([null]) 
  ],
  providers: [AppConfig, ResizeService, SortService, FilterService, SelectionService, ReorderService,
    EditService, DayMarkersService, ToolbarService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
