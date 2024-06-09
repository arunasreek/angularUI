import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ProcurementService } from 'src/app/services';
import { IPRPost } from 'src/app/models/procurement.model';
declare var $:any;

@Component({
  selector: 'app-purchase-requisition',
  templateUrl: './purchase-requisition.component.html',
  styleUrls: ['./purchase-requisition.component.css']
})
export class PurchaseRequisitionComponent implements OnInit {
  employerId: any;
  stockItemsList: any;
  materialItem: any;
  organizationlist: any;
  projectList: any;
  materialItemdet: any;
  supplierList: any;
  purchaseReq: any;
  branchlist: any;
  pur_dt_delvry:Date;
  PRForm: FormGroup;
  p: number=1;
  Isedit:number;
  IsJBupdate:boolean;
  supplierId:any;
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
    let PRPostData:IPRPost={
      RequisitionId:"0",
      SupplierName:$('#sup_name').val(),
      SupplierAddress :$("#pur_sup_add").val(),
      CpPersonName :$("#pur_cnt_per_name").val(),
      CpMobileNo :$("#pur_cnt_per_mobno").val(),
      DateOfDelivery:this.pur_dt_delvry,
      EmployerId:Number(this.PRForm.value.pur_emp_id),
      SupplierId :String(this.supplierId.suppId),
      BranchId :this.PRForm.value.pur_emp_brnch,
      ItemCode:$("#itemid").val(),
      ItemName:$("#description").val(),
      UnitOfMeasure:$("#unitmeasure").val(),
      Quantity:$("#unitmeasure").val(),
      QuotationId:this.PRForm.value.pur_req_id,
      
    }

    this.procurementService.SetPurchaseReq(PRPostData).subscribe((data:any)=>{
        if(data){
          alert(data);
            this.toastr.success("Stock Item Successfully Created.","Success");
            this.procurementService.GetPurchaseReqdet().subscribe((data: any) => {
              this.purchaseReq=data
            });
      //       this.staticTabs.tabs[0].active = true;
      
      //  this.submitted=false;
        }
    });
  }
  GetindividuvalSupdet(obj:any){
    this.supplierId = obj;
    console.log(obj);
    $(document).ready(function() {
      $("#close").click();
      $("#sup_name").val(obj.supplierName);
      $("#pur_cnt_per_name").val(obj.ocpFirstName);
      $("#pur_cnt_per_mobno").val(obj.ocpMobileNo);
      $("#pur_sup_add").val(obj.address1);
    });
  }
  GetItemdet(obj:any){
    $(document).ready(function() {
      $("#stockc").click();
      $("#itemid").val(obj.stockitemId);
      $("#description").val(obj.itemName);
      $("#unitmeasure").val(obj.unitOfMeasure);
    });
  }
  
  GetPurchaseById(ID:string){
    
  }
  
  purchaseReqAPICall(){
    this.procurementService.GetMaterialItemdet().subscribe((data: any) => {
      this.materialItemdet=data
    });
    this.procurementService.GetSupplierList(0).subscribe((data: any) => {
      this.supplierList=data

     
    });
    this.procurementService.GetEmployeeriD().subscribe((data: any) => {
      this.employerId=data
    });
    this.procurementService.getbranchlist().subscribe((data: any) => {
      this.branchlist=data
      
    });
  
    this.procurementService.GetPurchaseReqdet().subscribe((data: any) => {
      this.purchaseReq=data

      console.log(data)
    });

    this.procurementService.GetOrganizationList().subscribe((data: any) => {
      this.organizationlist=data
      
    });

    this.procurementService.GetprojctList().subscribe((data: any) => {
      this.projectList=data
    });

    this.procurementService.GetStockItems().subscribe((data: any) => {
      this.stockItemsList=data
    });
    
  }
}
