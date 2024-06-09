import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ProcurementService } from 'src/app/services';
import { IsupplierPost } from 'src/app/models/supplier.model';
import { IPOrder, IPRQua, IPodrShipping, IPorderInvoice } from 'src/app/models/procurement.model';
declare var $:any;
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  employerId: any;
  p: number=1;
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
  Isedit:number;
  IsJBupdate:boolean;
  PurchaseOrderForm:FormGroup;
  purQuatdets: any;
  Supplier:any;
  pur_order_dt_delvry:Date;
  constructor(public procurementService:ProcurementService,public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.purchaseOrderAPICall();
  }

  UOMFormSetUp(){
    this.PurchaseOrderForm = this.formBuilder.group({
      pur_order_emp_id: [''],
      pur_order_emp_brnch: [''],
      pur_order_orgunit:[''],
      pur_ord_quo_id: [''],
      pur_order_id: [''],
      pur_order_sup_name:[''],
      pur_ord_cnt_per_name: [''],
      pur_ord_cnt_per_mobno: [''],
      pur_ord_sup_add:[''],
      itemid: [''],
      description: [''],
      quantity:[''],
      unitmeasure: [''],
      price: [''],
      taxamt:[''],
      discountamt: [''],
      totamt:['']
    });
  }

  GetQuatationdetbyid(obj:any){
    console.log(obj)
    this.Supplier = obj;
    $(document).ready(function() {
      $("#stockc").click();
      $("#pur_order_sup_name").val(obj.supplierName);
      $("#pur_ord_cnt_per_name").val(obj.cpersonName);
      $("#pur_ord_cnt_per_mobno").val(obj.cpMobile);
      $("#pur_ord_sup_add").val(obj.supplierAddress);
      $("#pur_ord_quo_id").val(obj.quatationId)

      $("#itemid").val(obj.itemCode);
      $("#description").val(obj.itemName);
      $("#quantity").val(obj.quantity);
      $("#unitmeasure").val(obj.um)
      $("#price").val(obj.price);
      $("#taxamt").val(obj.discount);
      $("#discountamt").val(obj.discount);
      $("#totamt").val(obj.toatal)
    });
  }

  // onSubmitOrder(){
  //   let PRPost:IPodrShipping ={
  //     NameOfRecComp : this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     Country : this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     State : this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     City : this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     ContactPerson : this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     Cpmobile : this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     Cplandline : this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     Fax : this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     ModeOfShipment : this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     PortOfOrigin : this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     PortOfDestiny : this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     ShipmentTerms :this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     DeliveryAddress :this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     Remarks :this.PurchaseOrderForm.value.pur_ord_quo_id,
  //     DeliveryDate :this.PurchaseOrderForm.value.pur_ord_quo_id,
  //   }
  // }

  onSubmitPrimary(){
    let PRPostData:IPOrder={
      QuotationId : $("#pur_ord_quo_id").val(),
      SupplierName : $("#pur_order_sup_name").val(),
      SupplierAddress: $("#pur_ord_sup_add").val(),
      CpPersonName :$("#pur_ord_cnt_per_name").val(),
      CpMobileNo : $("#pur_ord_cnt_per_mobno").val(),
      // DateOfDelivery : this.PurchaseOrderForm.value.pur_ord_quo_id,
      SupplierId : this.Supplier.supplierId,
      EmployerId : $("#pur_order_emp_id").val(),
      BranchId : $("#pur_order_emp_brnch").val(),
      OrderId :"0",
      ItemCode :$("#itemid").val(),
      ItemName :$("#description").val(),
      UnitOfMeasure :$("#unitmeasure").val(),
      Rate :$("#price").val(),
      Discount :$("#discountamt").val(),
      GstRate :$("#taxamt").val(),
      TotalAmount :$("#totamt").val(),
      FinalAmount :$("#totamt").val(),
      Quantity :$("#quantity").val(),
    }
    this.procurementService.SetPurchaseOrder(PRPostData).subscribe((data:any)=>{
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

  onSubmitInvoiceDetails(){
    let PRPostData:IPorderInvoice={
      OrderId:$("#IPur_odr_id").val(),
      InvoicingCompany :$("#pur_order_inv_compny").val(),
      IContactperson :$("#Ipur_order_cnt_per").val(),
      IMobile :$("#Ipur_order_landline").val(),
      ILandline:$("#Ipur_order_landline").val(),
      IFax :$("#Ipur_order_fax").val(),
      IEmail:$("#pur_order_email").val(),
      InvoicingCompanyTaxId :$("#pur_order_inv_com_tax_id").val(),
      IPaymentTerms:$("#pur_order_paymnt_terms").val(),
      IRemarks :$("#Ipur_order_remarks").val(),
    }
    this.procurementService.SetPurchaseOrder(PRPostData).subscribe((data:any)=>{
      if(data){
          this.toastr.success("Stock Item Successfully Created.","Success");
          this.procurementService.GetPurchaseReqdet().subscribe((data: any) => {
            this.purchaseReq=data
          });
    
      }
  });
  }

  onSubmitShippingDetails(){
    let PRPostData:IPodrShipping={
      OrderId:$("#Pur_odr_id").val(),
      NameOfRecComp :$("#pur_order_rec_compny").val(),
      Country :$("#pur_order_del_country").val(),
      State :$("#pur_order_del_state").val(),
      City :$("#pur_order_del_city").val(),
      ContactPerson :$("#pur_order_cnt_per").val(),
      Cpmobile :$("#pur_order_mobile").val(),
      Cplandline :$("#pur_order_landline").val(),
      Fax :$("#pur_order_fax").val(),
      ModeOfShipment :$("#pur_order_mode_of_shpmnt").val(),
      PortOfOrigin :$("#pur_order_prtorgn").val(),
      PortOfDestiny :$("#pur_order_prtdest").val(),
      ShipmentTerms :$("#pur_order_shpmnterms").val(),
      DeliveryAddress :$("#pur_order_del_add").val(),
      Remarks :$("#pur_order_remrk").val(),
      DeliveryDate :String(this.pur_order_dt_delvry),
    }
    this.procurementService.SetPurchaseOrder(PRPostData).subscribe((data:any)=>{
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



  GetPurchaseById(id:number){
    this.purchaseOrder.forEach((value,index)=>{
      if(value.suppId == id){
       
        // this.suppId = value.suppId;
        this.PurchaseOrderForm.setValue({
          supp_id: 0,
          Supplier_Id: value.supplierId,
          Supplier_Name: value.supplierName,
          Supplier_S_C: value.bothSupplierCustomer,
          Supplier_c_Legeracc:value.ledgeraccountStatus,
          Country: value.country,
          State: value.stateId,
          supplier_city: value.city,
          Supplier_Add1: value.address1,
          Supplier_Add2: value.address2,
          Supplier_Post_Box: value.postBox,
          Supplier_Zip_code: value.zipCode,
          Supplier_Land_code: value.landLine,
          Supplier_Fax: value.fax,
          Supplier_Email: value.emailAddress,
          Supplier_Website: value.website,
          Supplier_Fname: value.ocpFirstName,
          Supplier_Mname:value.ocpMiddleName,
          Supplier_Lname:value.ocpLastName,
          Supplier_Office_email:value.ocpEmail,
          Supplier_Office_Designation:value.ocpDesignation,
          Supplier_Office_Phone:value.ocpPhone,
          Supplier_Office_Fax:value.ocpFax,
          Supplier_Office_MobileNo:value.ocpMobileNo,
        })
        this.IsJBupdate=true;
        this.Isedit=1;
      } 
      $(document).ready(function() {
        $('#tab_2').click();
      });
    });
  }

  


  purchaseOrderAPICall(){
    this.procurementService.GetPurQuatdet().subscribe((data: any) => {
      this.purQuatdet=data

    });
    this.procurementService.GetPurQuatdets().subscribe((data: any) => {
      this.purQuatdets=data

      console.log(data);
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

    this.procurementService.GetPurchaseOrderdet().subscribe((data: any) => {
      this.purchaseOrder=data
      console.log(data)
    });

    this.procurementService.GetOrganizationList().subscribe((data: any) => {
      this.organizationlist=data
    });

    // this.procurementService.GetprojctList().subscribe((data: any) => {
    //   this.projectList=data
    // });
   
  }
}
