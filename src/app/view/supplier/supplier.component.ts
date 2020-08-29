import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {CustomerService } from 'src/app/services';
import { IsupplierPost } from 'src/app/models/supplier.model';
declare var $:any;

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  public rowData:[];

  // SupplierList:any;
  supplierForm: FormGroup;
  submitted: boolean;
  enterprisealllist: any;
  erpriseids: any;
  countryList: any;
  jobCatlogPriDetailes: any;
  organizationList: any;
  stateList: any;
  supplierList: any;

  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService,
    public SupplierService:CustomerService) { }

  ngOnInit(): void {
    this.supplierServiceAPICall();
    this.supplierFormSetup();
  }
  supplierFormSetup(){
    this.supplierForm = this.formBuilder.group({
      supp_id: [''],
      Supplier_Id: [''],
      Supplier_Name: [''],
      Supplier_S_C: [''],
      Supplier_c_Legeracc:[''],
      Country: [''],
      State: [''],
      supplier_city: [''],
      Supplier_Add1: [''],
      Supplier_Add2: [''],
      Supplier_Post_Box: [''],
      Supplier_Zip_code: [''],
      Supplier_Land_code: [''],
      Supplier_Fax: [''],
      Supplier_Email: [''],
      Supplier_Website: [''],
      Supplier_Fname: [''],
      Supplier_Mname:[''],
      Supplier_Lname:[''],
      Supplier_Office_email:[''],
      Supplier_Office_Designation:[''],
      Supplier_Office_Phone:[''],
      Supplier_Office_Fax:[''],
      Supplier_Office_MobileNo:[''],
    
    });
  }

  get f() { return this.supplierForm.controls; }


  onSubmitPrimary() {

    this.submitted = true;
    console.log(this.supplierForm.value)
    // stop here if form is invalid
    if (this.supplierForm.invalid) {
        return;
    }
   
  
    let supplierData: IsupplierPost = {
      supp_id:0,
      Supplier_ID: this.supplierForm.value.Supplier_Id,
      Supplier_Name: this.supplierForm.value.Supplier_Name,
      Both_Supplier_Customer: this.supplierForm.value.Supplier_S_C,
      Supplier_c_Legeracc:this.supplierForm.value.Supplier_c_Legeracc,
      country_id: this.supplierForm.value.Country,
      state_id: this.supplierForm.value.State,
      city_id:this.supplierForm.value.supplier_city,
      Address_1: this.supplierForm.value.Supplier_Add1,
      Address_2: this.supplierForm.value.Supplier_Add2,
      Post_Box: this.supplierForm.value.Supplier_Post_Box,
      Land_Line: this.supplierForm.value.Supplier_Land_code,
      Zip_Code: this.supplierForm.value.Suppplier_Zip_code,
      Fax:this.supplierForm.value.Supplier_Fax,
      Email_Address: this.supplierForm.value.Supplier_Email,
      Website: this.supplierForm.value.Supplier_Website,
      OCP_FirstName: this.supplierForm.value.Supplier_Fname,
      OCP_MiddleName: this.supplierForm.value.Supplier_Mname,
      OCP_LastName:this.supplierForm.value.Supplier_Lname,
      OCP_Email: this.supplierForm.value.Supplier_Office_email,
      OCP_Designation: this.supplierForm.value.Supplier_Office_Designation,
      OCP_Phone: this.supplierForm.value.Supplier_Office_Phone,
      OCP_Fax: this.supplierForm.value.Supplier_Office_Fax,
      OCP_MobileNo: this.supplierForm.value.Supplier_Office_MobileNo, 
      
       
    }
  
    this.SupplierService.SetSupplier(supplierData).subscribe((data: any) => {
      if(data.ResponseMsg){
        this.toastr.success("Supplier Successfully Created.","Success");
     this.SupplierService. getSupplierList(0).subscribe((data: any) => {
      this.supplierList=data
    });
        $(document).ready(function() {
          $("#tabfirst").click();
        });
      }
  
      // this.employerBranchService.getEmployeedetList().subscribe((data: any) => {
      //   this.employeedetList = data;
      //   this.Isupdate=true;
      // });
  
    });
  
  
  }

  columnDefs = [
    {headerName: 'Supplier ID', field: 'Supplier_ID', width:150},
    {headerName: 'Supplier Name', field: 'Supplier_Name', width:170 },
    {headerName: 'Supplier Email', field: 'Email_Address', width:200 },
    {headerName: 'Land Line', field: 'Fax', width:150 },
    { headerName: "Status",
    suppressMenu: true,
     width:100,
    suppressSorting: true,
    template:
      `<i  class="fa fa-check-circle" style="border:none;background:none;color:#102f66">
         
      </i>
      
      <i  class="fa fa-remove" style="border:none;background:none;color:#102f66;margin-left:5px">
         
       </i>`
  },
    { headerName: "Actions",
    suppressMenu: true,
    width:100,
    suppressSorting: true,
    template:
      `    <button type="button" data-action-type="view"  class="fa fa-edit" style="border:none;background:none;color:#102f66">
      
       </button>

      <button type="button" data-action-type="remove" class="fa fa-trash" style="border:none;background:none;color:#102f66">
        
      </button>`
  },
  { 
  suppressMenu: true,
  width:150,
  suppressSorting: true,
  template:
    `<button class="btn bg-maroon margin" style="margin-top:-5px">Ledger Account</button>`
}
    
];

onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  this.SupplierService. getSupplierList(0).subscribe(data => {
        params.api.setRowData(data);
    });
}
  supplierServiceAPICall(){
    this.commonService. getEnterprisealllist().subscribe((data: any) => {
      this.enterprisealllist=data
     
    });
    // this.SupplierService. getSupplierList(0).subscribe((data: any) => {
     
    //   this.SupplierList=data
    // });
    this.commonService. getEnterpriseids().subscribe((data: any) => {
       this.erpriseids=data
      // console.log(data);
    });
     this.SupplierService. getStatelist(0).subscribe((data: any) => {
     
      this.stateList=data
    });
    this.commonService.getCountry().subscribe((data: any) => {
      this.countryList=data
     
    });
    this.commonService.getJobCatlogPriDetailes().subscribe((data: any) => {
      this.jobCatlogPriDetailes=data
      
    });
    
    this.commonService.getCountry().subscribe((data: any) => {
      this.countryList=data
      
    });
    this.commonService.getOrganizationList(0).subscribe((data: any) => {
      this.organizationList=data
     
    });
   

  }    
}
