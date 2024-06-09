import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ProcurementService } from 'src/app/services';
import { IsupplierPost } from 'src/app/models/supplier.model';

import { IPRQua,IPQShip } from 'src/app/models/procurement.model';
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
  PRForm: FormGroup;
  PRShipping: FormGroup;
  pur_dt_delvry:Date;
  pur_quo_dt_delvry:Date;
  pur_quo_dt_delvrys:Date;
  p: number=1; 
   Isedit:number;
  IsJBupdate:boolean;
  supplierId:any;
  citiesList:any;
  statesList:any;
  constructor(public procurementService:ProcurementService,public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.purchaseQuatAPICall();
    this.PRFormSetup();
    this.PRShip();
  }
  PRShip(){
    this.PRShipping = this.formBuilder.group({
      pur_quo_rec_compny:[''],
      pur_qou_cnt_per:[''],
      pur_quo_mobile:[],
      pur_quo_landline:[],
      pur_quo_fax:[],
      pur_quo_recng_com_tax_id:[],
      pur_quo_mode_of_shpmnt:[],
      pur_quo_prtorgn:[],
      pur_quo_prtdest:[],
      pur_quo_shpmnterms:[],
      pur_quo_del_country:[],
      pur_quo_del_state:[],
      pur_quo_del_city:[],
      pur_quo_del_add:[],
      pur_quo_del_terms:[],
      pur_quo_remrk:[],
    })
  }

  PRFormSetup(){
    this.PRForm = this.formBuilder.group({
      
      pur_quo_emp_id:[''],
      pur_quo_emp_brnch:[''],
      pur_quo_project:[''],
      pur_quo_requ_id:[''],
      // pur_quo_id:[''],
      pur_quo_sup_name:[''],
      pur_quo_cnt_per_name:[''],
      pur_quo_cnt_per_mobno:[''],
      pur_quo_sup_add:[''],
      pur_quo_remarks:[''],
      pur_quo_ID:['']
    });
  }
  onsubmitShipment(){
    let PRSdata:IPQShip={
      RecivedCompany: this.PRShipping.value.pur_quo_rec_compny,
      ContactPerson: this.PRShipping.value.pur_qou_cnt_per,
      Mobile: this.PRShipping.value.pur_quo_mobile,
      LandLine: this.PRShipping.value.pur_quo_landline,
      Fax: this.PRShipping.value.pur_quo_fax,
      CompanyTaxId: this.PRShipping.value.pur_quo_recng_com_tax_id,
      ModeShipment: this.PRShipping.value.pur_quo_mode_of_shpmnt,
      PortOrigon: this.PRShipping.value.pur_quo_prtorgn,
      PortDestination: this.PRShipping.value.pur_quo_prtdest,
      ShipmentTerms: this.PRShipping.value.pur_quo_shpmnterms,
      DateDelivery: this.pur_quo_dt_delvrys,
      CountryId: this.PRShipping.value.pur_quo_del_country,
      StateId: this.PRShipping.value.pur_quo_del_state,
      City: this.PRShipping.value.pur_quo_del_city,
      DeliveryAddress: this.PRShipping.value.pur_quo_del_add,
      DeliveryTerms: this.PRShipping.value.pur_quo_del_terms,
      Remarks: this.PRShipping.value.pur_quo_remrk,
      QuotationId: $("#pur_quo_ID").val()
    }
    this.procurementService.SetPurchaseShipping(PRSdata).subscribe((data:any)=>{
      if(data){
          this.toastr.success("Stock Item Successfully Created.","Success");
          this.procurementService.GetPurchaseReqdet().subscribe((data: any) => {
            this.purchaseReq=data
          });
    //       this.staticTabs.tabs[0].active = true;
    
    //  this.submitted=false;
      }
  });
  }

  onSubmitPrimary(){
    let PRPostData:IPRQua={
      RequisitionId: $("#pur_quoreq_id").val(),
      SupplierName: $('#pur_quo_sup_name').val(),
      SupplierAddress: $("#pur_quo_sup_add").val(),
      CpPersonName: $("#pur_quo_cnt_per_name").val(),
      CpMobileNo: $("#pur_quo_cnt_per_mobno").val(),
      DateOfDelivery: this.pur_quo_dt_delvry,
      EmployerId: Number(this.PRForm.value.pur_quo_emp_id),
      SupplierId: String(this.supplierId.suppId),
      ItemCode: $("#itemid").val(),
      ItemName: $("#description").val(),
      UnitOfMeasure: $("#unitmeasure").val(),
      Quantity: $("#quantity_").val(),
      QuotationId: "0",
      Rate: $("#price").val(),
      Discount: $("#discountamt").val(),
      TotalAmount: $("#TAmt").val()
    }

    this.procurementService.SetPurchaseQuo(PRPostData).subscribe((data:any)=>{
        if(data){
            this.toastr.success("Stock Item Successfully Created.","Success");
            this.procurementService.GetPurchaseReqdet().subscribe((data: any) => {
              this.purchaseReq=data
            });
      //       this.staticTabs.tabs[0].active = true;
      
      //  this.submitted=false;
        }
    });
  }

  GetPurchaseDet(data:any){
    $(document).ready(function() {
      $("#close").click();
      $("#pur_quoreq_id").val(data.requisitionId);
      // $("#pur_cnt_per_name").val(data.ocpFirstName);
      // $("#pur_cnt_per_mobno").val(data.ocpMobileNo);
      // $("#pur_sup_add").val(data.address1);
    });
  }
  GetindividuvalSupdet(data:any){
    this.supplierId = data;
    $(document).ready(function() {
      $("#closeS").click();
      $("#pur_quo_sup_name").val(data.supplierName);
      $("#pur_quo_cnt_per_name").val(data.ocpFirstName);
      $("#pur_quo_cnt_per_mobno").val(data.ocpMobileNo);
      $("#pur_quo_sup_add").val(data.address1);
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

  GetcaltotAmt(){
    $(document).ready(function() {
      var Quantity = parseInt($("#quantity_").val());
      var price = parseFloat($("#price").val());
      var TaxAmt =parseFloat($("#taxamt").val());
      var Dis =parseFloat($("#discountamt").val());

      var Total = Quantity*price;
      Total = (Total+TaxAmt)-Dis;
      $("#totamt").val(Total);
      
    });
    this.CalTotal();
  }

  CalTotal(){
    $(document).ready(function() {
      // var Quantity = parseInt($("#quantity_").val());
      // var price = parseFloat($("#price").val());
      // var TaxAmt =parseFloat($("#taxamt").val());
      // var Dis =parseFloat($("#discountamt").val());

      // var Total = Quantity*price;
      // Total = (Total+TaxAmt)-Dis;
      // $("#totamt").val(Total);
      $("#TDisAmt").val($("#discountamt").val());
      $("#Distype").val($("#distype").val());
      $("#TAmt").val($("#totamt").val());
    });
  }

  purchaseQuatAPICall(){
    this.procurementService.GetPurQuatdet().subscribe((data: any) => {
      this.purQuatdet=data
    });
    this.procurementService.GetSupplierList(0).subscribe((data: any) => {
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
    this.procurementService.getbranchlist().subscribe((data: any) => {
      this.branchList=data
    });
    this.commonService.getCountry().subscribe((data: any) => {
      this.countryList=data
      console.log(data);
    });
    this.commonService.getCities().subscribe((data: any) => {
      this.citiesList=data
      console.log(data);
    });
    this.commonService.getStates().subscribe((data: any) => {
      this.statesList=data
      console.log(data);
    });
  }
}
