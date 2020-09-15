import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ProcurementService } from 'src/app/services';
import { IsupplierPost } from 'src/app/models/supplier.model';
declare var $:any;

@Component({
  selector: 'app-purchase-quotation',
  templateUrl: './purchase-quotation.component.html',
  styleUrls: ['./purchase-quotation.component.css']
})
export class PurchaseQuotationComponent implements OnInit {

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
  branchList: any;
  pur_quo_dt_delvry:Date;
  

  constructor(public procurementService:ProcurementService,public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.purchaseQuatAPICall();
  }
  purchaseQuatAPICall(){
    this.procurementService.GetPurQuatdet().subscribe((data: any) => {
      this.purQuatdet=data
    });
    this.procurementService.GetSupplierList().subscribe((data: any) => {
      this.supplierList=data
    });
    this.procurementService.GetEmployeeriD().subscribe((data: any) => {
      this.employerId=data
    });

    this.procurementService.GetStockItems().subscribe((data: any) => {
      this.stockItems=data
    });

    this.procurementService.GetPurchaseReqdet().subscribe((data: any) => {
      this.purchaseReq=data
    });

    this.procurementService.GetOrganizationList().subscribe((data: any) => {
      this.organizationlist=data
    });
    this.procurementService.GetprojctList().subscribe((data: any) => {
      this.projectList=data
    });
    this.procurementService.getbranchlist(0).subscribe((data: any) => {
      this.branchList=data
    });
    this.commonService.getCountry().subscribe((data: any) => {
      this.countryList=data
    });
  }
}
