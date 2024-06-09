import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ProcurementService } from 'src/app/services';
import { IsupplierPost } from 'src/app/models/supplier.model';

@Component({
  selector: 'app-sales-enquiry',
  templateUrl: './sales-enquiry.component.html',
  styleUrls: ['./sales-enquiry.component.css']
})
export class SalesEnquiryComponent implements OnInit {

  employerId: any;
  stockItems: any;
  materialItem: any;
  organizationlist: any;
  projectList: any;
  materialItemdet: any;
  supplierList: any;
  purchaseReq: any;
  purQuatdet: any;
  countryList: any;
  purchaseOrder: any;
  branchList: any;
  pur_dt_delvry:Date;
  customerList: any;

  constructor(public procurementService:ProcurementService,public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.salesEnquiryAPICall();
  }
  salesEnquiryAPICall(){
    this.procurementService.GetPurQuatdet().subscribe((data: any) => {
      this.purQuatdet=data
    });
    this.procurementService.GetMaterialItemdet().subscribe((data: any) => {
      this.materialItemdet=data
    });
    this.procurementService.getCustomerList(0).subscribe((data: any) => {
     this.customerList=data
    });
    this.procurementService.GetEmployeeriD().subscribe((data: any) => {
      this.employerId=data
    });
    this.procurementService.getbranchlist().subscribe((data: any) => {
      this.branchList=data
    });
    this.procurementService.GetStockItems().subscribe((data: any) => {
      this.stockItems=data
    });
    this.procurementService.GetPurchaseReqdet().subscribe((data: any) => {
      this.purchaseReq=data
    });

    this.procurementService.GetPurchaseOrderdet().subscribe((data: any) => {
      this.purchaseOrder=data
    });

    this.procurementService.GetOrganizationList().subscribe((data: any) => {
      this.organizationlist=data
    });

    this.procurementService.GetprojctList().subscribe((data: any) => {
      this.projectList=data
    });
   
  }
}
