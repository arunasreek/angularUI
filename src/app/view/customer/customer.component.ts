import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {CustomerService } from 'src/app/services';
import { IcustomerPost } from 'src/app/models/customer.model';
declare var $:any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 
  
  private gridApi;
  private gridColumnApi;
  public rowData:[];
  Isedit:number;
  IsJBupdate:boolean;
  customerList:any;
  customerForm: FormGroup;
  submitted: boolean;
  enterprisealllist: any;
  erpriseids: any;
  countryList: any;
  p: number=1;
  jobCatlogPriDetailes: any;
  organizationList: any;
  stateList: any;
  cust_id: number;
  Iscustomerupdate: boolean;

  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService,
    public customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerServiceAPICall();
    this.customerFormSetup();
  }
 
  customerFormSetup(){
    this.customerForm = this.formBuilder.group({
     
      Customer_Id: [''],
      Customer_Name: [''],
      Customer_S_C: [''],
      Customer_c_Legeracc:[''],
      Country: [''],
      State: [''],
      customer_city: [''],
      Customer_Add1: [''],
      Customer_Add2: [''],
      Customer_Post_Box: [''],
      Customer_Zip_code: [''],
      Customer_Land_code: [''],
      Customer_Fax: [''],
      Customer_Email: [''],
      Customer_Website: [''],
      Customer_Fname: [''],
      Customer_Mname:[''],
      Customer_Lname:[''],
      Customer_Office_email:[''],
      Customer_Office_Designation:[''],
      Customer_Office_Phone:[''],
      Customer_Office_Fax:[''],
      Customer_Office_MobileNo:[''],
    
    });
  }

  get f() { return this.customerForm.controls; }


  onSubmitPrimary() {

    this.submitted = true;
    console.log(this.customerForm.value)
    // stop here if form is invalid
    if (this.customerForm.invalid) {
        return;
    }
   
  
    let customerData: IcustomerPost = {
      cust_id:0,
      Customer_ID: this.customerForm.value.Customer_Id,
      Customer_Name: this.customerForm.value.Customer_Name,
      Both_Supplier_Customer: this.customerForm.value.Customer_S_C,
      ledgeraccount_status: this.customerForm.value.Customer_c_Legeracc,
      country_id: this.customerForm.value.Country,
      state_id: this.customerForm.value.State,
      city_id:this.customerForm.value.customer_city,
      Address_1: this.customerForm.value.Customer_Add1,
      Address_2: this.customerForm.value.Customer_Add2,
      Post_Box: this.customerForm.value.Customer_Post_Box,
      Land_Line: this.customerForm.value.Customer_Land_code,
      Zip_Code: this.customerForm.value.Customer_Zip_code,
      Fax:this.customerForm.value.Customer_Fax,
      Email_Address: this.customerForm.value.Customer_Email,
      Website: this.customerForm.value.Customer_Website,
      OCP_FirstName: this.customerForm.value.Customer_Fname,
      OCP_MiddleName: this.customerForm.value.Customer_Mname,
      OCP_LastName:this.customerForm.value.Customer_Lname,
      OCP_Email: this.customerForm.value.Customer_Office_email,
      OCP_Designation: this.customerForm.value.Customer_Office_Designation,
      OCP_Phone: this.customerForm.value.Customer_Office_Phone,
      OCP_Fax: this.customerForm.value.Customer_Office_Fax,
      OCP_MobileNo: this.customerForm.value.Customer_Office_MobileNo, 
    }
  
    this.customerService.SetCoustomer(customerData).subscribe((data: any) => {
      if(data.ResponseMsg){
        this.toastr.success("Customer Successfully Created.","Success");
     this.customerService. getCustomerList(0).subscribe((data: any) => {
      this.customerList=data
      console.log(data);
    });
        // $(document).ready(function() {
        //   $("#tabfirst").click();
        // });
      }
  
      // this.employerBranchService.getEmployeedetList().subscribe((data: any) => {
      //   this.employeedetList = data;
      //   this.Isupdate=true;
      // });
  
    });
  
  
  }

//   columnDefs = [
//     {headerName: 'Customer ID', field: 'Customer_ID', width:150},
//     {headerName: 'Customer Name', field: 'Customer_Name', width:170 },
//     {headerName: 'Customer Email', field: 'Email_Address', width:200 },
//     {headerName: 'Land Line', field: 'Fax', width:150 },
//     { headerName: "Status",
//     suppressMenu: true,
//      width:100,
//     suppressSorting: true,
//     template:
//       `<i  class="fa fa-check-circle" style="border:none;background:none;color:#102f66">
         
//       </i>
      
//       <i  class="fa fa-remove" style="border:none;background:none;color:#102f66;margin-left:5px">
         
//        </i>`
//   },
//     { headerName: "Actions",
//     suppressMenu: true,
//     width:100,
//     suppressSorting: true,
//     template:
//       `    <button type="button" data-action-type="view"  class="fa fa-edit" style="border:none;background:none;color:#102f66">
      
//        </button>

//       <button type="button" data-action-type="remove" class="fa fa-trash" style="border:none;background:none;color:#102f66">
        
//       </button>`
//   },
//   { 
//   suppressMenu: true,
//   width:150,
//   suppressSorting: true,
//   template:
//     `<button class="btn bg-maroon margin" style="margin-top:-5px">Ledger Account</button>`
// }
    
// ];

// onGridReady(params) {
//   this.gridApi = params.api;
//   this.gridColumnApi = params.columnApi;
//   this.customerService. getCustomerList(0).subscribe(data => {
//         params.api.setRowData(data);
//     });
// }
GetCustomer(id:number){
  this.customerList.forEach((value,index)=>{
    if(value.custId == id){
     
      this.cust_id = value.custId;
      this.customerForm.setValue({
        Customer_Id: value.customerId,
        Customer_Name: value.customerName,
        Customer_S_C: value.bothSupplierCustomer,
        Country: value.country,
        State:   value.stateId,
        Customer_c_Legeracc:value.ledgeraccountStatus,
        customer_city: value.cityId,
        Customer_Add1: value.address1,
        Customer_Add2: value.address2,
        Customer_Post_Box: value.postBox,
        Customer_Zip_code: value.zipCode,
        Customer_Land_code: value.landLine,
        Customer_Fax: value.fax,
        Customer_Email: value.emailAddress,
        Customer_Website: value.website,
        Customer_Fname: value.ocpFirstName,
        Customer_Mname: value.ocpMiddleName,
        Customer_Lname: value.ocpLastName,
        Customer_Office_email:value.ocpEmail,
        Customer_Office_Designation:value.ocpDesignation,
        Customer_Office_Phone:value.ocpPhone,
        Customer_Office_Fax:value.ocpFax,
        Customer_Office_MobileNo:value.ocpMobileNo,
      })
      this.IsJBupdate=true;
      this.Isedit=1;
    } 
    $(document).ready(function() {
      $('#tab_2').click();
    });
  });
}


  customerServiceAPICall(){
    this.commonService. getEnterprisealllist().subscribe((data: any) => {
      this.enterprisealllist=data
     
    });
    this.customerService. getCustomerList(0).subscribe((data: any) => {
     
      this.customerList=data
      console.log(data);
    });
    this.commonService. getEnterpriseids().subscribe((data: any) => {
       this.erpriseids=data
      // console.log(data);
    });
     this.customerService. getStatelist(0).subscribe((data: any) => {
     
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
