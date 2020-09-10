import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ProcurementService } from 'src/app/services';
import { PRPost } from 'src/app/models/procurement.model';
declare var $:any;

@Component({
  selector: 'app-purchase-requisition',
  templateUrl: './purchase-requisition.component.html',
  styleUrls: ['./purchase-requisition.component.css']
})
export class PurchaseRequisitionComponent implements OnInit {
  employerId: any;
  stockItems: any;
  materialItem: any;
  organizationlist: any;
  projectList: any;
  materialItemdet: any;
  supplierList: any;
  purchaseReq: any;
  branchlist: any;
  pur_dt_delvry:Date;
  PRForm: FormGroup;
  constructor(public procurementService:ProcurementService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.purchaseReqAPICall();
    this.PRFormSetup();
  }

  PRFormSetup(){
    this.PRForm = this.formBuilder.group({
      pur_emp_id:[''],
      pur_emp_brnch:[''],
      pur_project:[''],
      pur_orgunit:[''],
      pur_mat_req_id:[''],
      pur_req_id:[''],
      pur_sup_name:[''],
      pur_cnt_per_name:[''],
      pur_cnt_per_mobno:[''],
      pur_sup_add:[''],
      pur_dt_delvry:[''],
      pur_del_loc:[''],
      pur_remarks:[''],
    });
  }

  get f() { return this.PRForm.controls; }


  onSubmitPrimary(){
    let PRPostData:PRPost={

      emp_id : this.PRForm.value.pur_emp_id,
   eprbrch_id :this.PRForm.value.pur_emp_brnch,
    org_unitid : this.PRForm.value.pur_orgunit,
         prg_id : this.PRForm.value.pur_project,
        mtrl_req_id :this.PRForm.value.pur_mat_req_id,
        supname : this.PRForm.value.pur_sup_name,
        sup_id: this.PRForm.value,
         cntper_name : this.PRForm.value.pur_cnt_per_name,
         pursup_add : this.PRForm.value.pur_sup_add,
         purdtdelvry : this.pur_dt_delvry,
         purdtdelloca : this.PRForm.value.pur_del_loc,
         remarks : this.PRForm.value.pur_remarks,
         tbl_length : this.PRForm.value,
         pur_req_id : this.PRForm.value.pur_req_id,
      
    }

    this.procurementService.SetPurchaseReq(PRPostData).subscribe((data:any)=>{
        if(data.ResponseMsg){
         
            this.toastr.success("Stock Item Successfully Created.","Success");
            this.procurementService.GetPurchaseReqdet().subscribe((data: any) => {
              this.purchaseReq=data
            });
      //       this.staticTabs.tabs[0].active = true;
      
      //  this.submitted=false;
        }
    });
  }

  
  
  purchaseReqAPICall(){
    this.procurementService.GetMaterialItemdet().subscribe((data: any) => {
      this.materialItemdet=data
    });
    this.procurementService.GetSupplierList().subscribe((data: any) => {
      this.supplierList=data
    });
    this.procurementService.GetEmployeeriD().subscribe((data: any) => {
      this.employerId=data
    });
    this.procurementService.getbranchlist(0).subscribe((data: any) => {
      this.branchlist=data
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

    
  }
}
