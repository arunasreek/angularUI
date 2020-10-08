import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './view/employee/employee.component';
import { EnterpriseComponent } from './view/enterprise/enterprise.component';
import { EmployerComponent } from './view/employer/employer.component';
import { EmpbranchComponent } from './view/empbranch/empbranch.component';
import { OrganizationComponent } from './view/organization/organization.component';
import { ProjectComponent } from './view/project/project.component';
import {ServiceCreationComponent  } from './view/service-creation/service-creation.component';
import { CustomerComponent } from './view/customer/customer.component';
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

import {MaterialRequisitionComponent} from './view/procurment/material-requisition/material-requisition.component';
import {MaterialRequisitionViewComponent} from './view/procurment/material-requisition-view/material-requisition-view.component';
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
import {SalesEnquiryComponent} from './view/sales/sales-enquiry/sales-enquiry.component';
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





const routes: Routes = [
  { path: 'enterprise', component: EnterpriseComponent },
  { path: 'employer', component: EmployerComponent },
  { path: 'empbranch', component: EmpbranchComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'service-creation', component: ServiceCreationComponent  },
  { path: 'customer', component: CustomerComponent  },
  { path: 'confirm-email', component: ConfirmEmailComponent },
  { path: 'chart-of-accts', component:ChartOfAcctsComponent  },
  { path: 'journal-voucher', component:  JournalVoucherComponent },
  { path: 'payment-voucher', component: PaymentVoucherComponent },
  { path: 'receipt-voucher', component: ReceiptVoucherComponent  },
  { path: 'asset', component:  AssetComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'verify-code', component:  VerifyCodeComponent },
  { path: 'send-code', component: SendCodeComponent  },
  { path: 'reset-password-confirmation', component: ResetPasswordConfirmationComponent  },
  { path: 'reset-password', component:  ResetPasswordComponent },
  { path: 'register', component: RegisterComponent  },
  { path: 'forgot-password', component: ForgotPasswordComponent  },
  { path: 'forgot-password-confirmation', component: ForgotPasswordConfirmationComponent  },
  { path: 'external-login-failure', component: ExternalLoginFailureComponent  },
  { path: 'external-login-confirmation', component: ExternalLoginConfirmationComponent  },
  { path: 'jv-print', component:  JvPrintComponent },
  { path: 'journal-vocher-view', component: JournalVocherViewComponent  },
  { path: 'home', component:  AboutComponent },
  { path: 'contact', component:  ContactComponent  },
  { path: 'index', component: IndexComponent },
  {path:'jobcatalogfileupload',component:JobcatalogfileuploadComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'groupdefinition',component:GroupdefinitionComponent},
  {path:'login',component:LoginComponent},
  {path:'usercreation',component:UsercreationComponent},
  {path:'userpermition',component:UserpermitionComponent},
  {path: 'add-phone-number', component: AddPhoneNumberComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path:'index', component: IndexComponent},
  {path:'manage-logins',component:ManageLoginsComponent},
  {path:'set-password', component: SetPasswordComponent},
  {path:'verify-phone',component:VerifyPhoneComponent},
  {path:'dummy',component:DummyComponent},
  {path:'floor',component:FloorComponent},
  {path:'jobcatalouge',component:JobcatalougeComponent}, 
  {path:'jobcategory',component:JobcategoryComponent},
  {path:'jobcategoryview',component:JobcategoryviewComponent},
  {path:'jobclass', component:JobclassComponent},
  {path:'jobclassview',component:JobclassviewComponent},
  {path:'jobgroup',component:JobgroupComponent},
  {path:'jobgroupview',component:JobgroupviewComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'rack',component:RackComponent},
  {path:'row',component:RowComponent},
  { path: 'material-requisition',component:MaterialRequisitionComponent},
  { path: 'material-requisition-view',component:MaterialRequisitionViewComponent},
  { path:'purchase-order',component:PurchaseOrderComponent },
  { path:'purchase-quotation',component:PurchaseQuotationComponent },
  { path:'purchase-quotation-view', component:PurchaseQuotationViewComponent},
  { path:'purchase-requisition',component:PurchaseRequisitionComponent},
  { path:'purchase-requisition-view',component:PurchaseRequisitionViewComponent },
  { path:'error',component:ErrorComponent},
  {path:'lockout',component:LockoutComponent},
  {path:'floor',component:FloorComponent},
  {path:'floor-view',component:FloorViewComponent},
  {path:'item-category',component:ItemCategoryComponent},
  {path:'item-category-view',component:ItemCategoryViewComponent},
  {path:'itemgroup',component:ItemgroupComponent},
  {path:'itemgroup-view',component:ItemgroupViewComponent},
  {path:'rack',component:RackComponent},
  {path:'rack-view',component:RackViewComponent},
  {path:'row',component:RowComponent},
  {path:'row-view',component:RowViewComponent},
  {path:'stockitem',component:StockitemComponent},
  {path:'stockitem-view',component:StockitemViewComponent},
  { path: 'approve', component: ApproveComponent},
  { path: 'approve-status', component: ApproveStatusComponent},
  { path: 'generalledge', component: GeneralledgeComponent},
  { path: 'generalledgeprint', component: GeneralledgeprintComponent},
  { path: 'tradingaccount', component: TradingaccountComponent},
  {path:'sales-enquiry',component:SalesEnquiryComponent },
  {path:'outgoing-quotation',component:OutgoingQuotationComponent},
  {path:'sales-order',component:SalesOrderComponent},

  {path:'supplier-invoice',component:SupplierInvoiceComponent},
  {path:'customer-invoice',component:CustomerInvoiceComponent},
  {path:'sales-order-report',component:SalesOrderReportComponent},
  {path:'purchase-order-report',component:PurchaseOrderReportComponent},
  {path:'po-ageing-report',component:PoAgeingReportComponent},
  {path:'stock-adjustment-note',component:StockAdjustmentNoteComponent},
  {path:'stockin-hand-register',component:StockinHandRegisterComponent},
  {path:'stock-movement-register',component:StockMovementRegisterComponent},
  {path:'delivery-note',component:DeliveryNoteComponent},
  {path:'good-receipt-note',component:GoodReceiptNoteComponent},
  {path:'sales-returns',component:SalesReturnsComponent},
  {path:'purchase-returns',component:PurchaseReturnsComponent},
  {path:'supplier',component:SupplierComponent},
  {path:'allocation-segments',component:AllocationSegmentsComponent},
  {path:'fisical-year',component:FisicalYearComponent},
  {path:'finfis-year-closing',component:FinfisYearClosingComponent},
  {path:'finfis-month-closing',component:FinfisMonthClosingComponent},
  {path:'financial-year',component:FinancialYearComponent},
  {path:'budgeting-of-gls',component:BudgetingOfGLsComponent},
  {path:'credit-note',component:CreditNoteComponent},
  {path:'debit-note',component:DebitNoteComponent},
  {path:'alert-settings',component:AlertSettingsComponent},
  {path:'group-creation',component:GroupCreationComponent},
  {path:'form-management',component:FormManagementComponent},
  {path:'user-management',component:UserManagementComponent},
  {path:'campaign',component:CampaignComponent},
  {path:'quick-campaign',component:QuickCampaignComponent},
  {path:'bank-reconcilation',component:BankReconcilationComponent},
  {path:'gantt-chart',component:GanttChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
