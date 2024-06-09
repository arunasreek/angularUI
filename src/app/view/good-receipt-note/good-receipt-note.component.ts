import { Component, OnInit } from '@angular/core';

import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ProcurementService } from 'src/app/services';
import { IsupplierPost } from 'src/app/models/supplier.model';
import { ISupplierInvoice } from 'src/app/models/procurement.model';
declare var $:any;
@Component({
  selector: 'app-good-receipt-note',
  templateUrl: './good-receipt-note.component.html',
  styleUrls: ['./good-receipt-note.component.css']
})
export class GoodReceiptNoteComponent implements OnInit {
  
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
  pur_ord_date:Date;
  PurInvoice:any;
  Isedit:number;
  IsJBupdate:boolean;
  sup_do_date:Date;
  Warehouse:any;
  constructor(public procurementService:ProcurementService,public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.GRNAPICall();
  }

  GetPurchasedetbyid(data:any){
    console.log(data);
    alert(data.orderId)
    this.procurementService.GetPurchaseOdrById(data.orderId).subscribe((data: any) => {
      // this.PurInvoice=data
      console.log(data);
      $('#pur_ord_quo_id').val(data.orderId);
      $('#pur_order_emp_id').val(data.employeeId);
      $('#pur_order_emp_brnch').val(data.employeeBranch);
      // $('#pur_order_orgunit').val(data.);
      // $('#pur_order_id').val(data.);
      $('#pur_order_sup_name').val(data.supplierName);
      $('#pur_order_cnt_per_name').val(data.contactPerson);
      $('#pur_order_cnt_per_mobno').val(data.contactMobileNo);
      $('#pur_order_sup_add').val(data.supplierAdd);
      $('#itemid').val(data.itemId);
      $('#description').val(data.itemName);
      $('#quantity').val(data.quantity);
      $('#unitmeasure').val(data.unitMeasure);
      $('#price').val(data.price);
      $('#taxamt').val(data.taxAmt);
      // $('#distype').val(data.);
      $("#mat_remarks").val(data.remarks);
      $('#discountamt').val(data.discount);
      $('#totamt').val(data.totalAmt);    
      $('#pur_order_inv_compny').val(data.invoiceCompany);
      $('#pur_order_inv_com_tax_id').val(data.invoiceTaxID);
      $('#pur_order_cnt_Iper').val(data.icontactPerson);
      $('#pur_order_Ilandline').val(data.ilandline);
      $('#pur_order_Imobile').val(data.imoblie);
      $('#pur_order_Ifax').val(data.fax);
      $('#pur_order_email').val(data.email);
      $('#pur_order_remarks').val(data.remarks);
      $('#pur_order_paymnt_terms').val(data.paymentTerms);
       
    });
    $(document).ready(function() {
      $("#close").click();
      
    });
  }

  GetBranchbyid(data:any){
    $('#Warehouse').val(data.branchName);
    $(document).ready(function() {
      $("#close1").click();
      
    });
  }

  GRNAPICall(){
    this.procurementService.GetPurchaseInvoice().subscribe((data: any) => {
      this.PurInvoice=data
    });
    this.procurementService.GetPurQuatdet().subscribe((data: any) => {
      this.purQuatdet=data
    });
    this.procurementService.GetSupplierList(0).subscribe((data: any) => {
      this.supplierList=data
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

    this.procurementService.GetWarehouse().subscribe((data: any) => {
      this.Warehouse=data
      console.log(data);
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

