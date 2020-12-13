import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerBranchesService } from 'src/app/services';
import { IEmployeeBranchPost, IEmployeeBranchDelete, IEmployeeEdit, IEmployeeWorkPermit } from 'src/app/models/empbranch.model';
declare var $:any;

@Component({
  selector: 'app-empbranch',
  templateUrl: './empbranch.component.html',
  styleUrls: ['./empbranch.component.css']
})
export class EmpbranchComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
public rowData:[any];

Isupdate:boolean;
  branchList:any;
  countryList:any;
  employeeriDList:any;
  enterprisealllist:any;
  erpriseids:any;
  stateList:any;
  jobCatlogPriDetailes:any;
  organizationIDList:any;
  organizationList:any;
  Isorganizationupdate:boolean;
  Isempbranchupdate:boolean;
  Designation:string;
  o_id:number;
  p: number=1;
  submitted=false;

  employerBranchForm:FormGroup;
  b_id: number;

  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService,
    public employerBranchService:EmployerBranchesService) { }

  ngOnInit(): void {
    this.empBranchServiceAPICall();
    this.employerBranchFormSetup();
  }
  
  employerBranchFormSetup(){
    this.employerBranchForm = this.formBuilder.group({
      b_id:[''],
      employee_id: [''],
      Employer_Id: [''],
      Branch_ID: ['',[Validators.required,Validators.maxLength(6)]],
      Branch_Name: [''],
      branc_manager_name: [''],
      Branch_Currency: [''],
      Cost_Center: [''],
      Sales_Outlet: [''],
      warehouse: [''],
      stock_point: [''],
      Country: [''],
      State: [''],
      empbranch_city: [''],
      Address: [''],
      B_Landline: [''],
      B_Fax: [''],
      B_Mobile_Number: [''],
      B_Email:[''],
      B_Website:[''],
      B_TaxId:[''],
    
    });
  }

  get f() { return this.employerBranchForm.controls; }
 
  columnDefs = [
    {headerName: 'Employer ID',field:'EmployerId'},
    {headerName: 'Branch ID', field: 'BranchId'},
    {headerName: 'Branch Name', field: 'BranchName' },
    {headerName: 'Branch Manager Name', field: 'BranchCurrency' },
    { headerName: "Actions",
    suppressMenu: true,
    suppressSorting: true,
    width:150,
    template:
      `<button type="button" data-action-type="view"  class="fa fa-eye" style="border:none;background:none;color:#102f66;margin-left:-10px">
         
      </button>
      
      <button type="button" data-action-type="view"  class="fa fa-edit" style="border:none;background:none;color:#102f66">
         
       </button>

      <button type="button" data-action-type="remove" class="fa fa-trash" style="border:none;background:none;color:#102f66">
        
      </button>`
  }
    
];

onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
 
  this.employerBranchService.getbranchlist(0).subscribe(data => {
    params.api.setRowData(data);
    });
  

}

empbranchEdit(b_id:number){
  this.employerBranchService.getbranchlist(b_id).subscribe((data: any) => {
  
     this.employerBranchForm.setValue({
        Employer_Id:data[0].EmployerId,
        Branch_ID:data[0].b_id,
        Branch_Name:data[0].BranchName,
        branc_manager_name:data[0].manager_name,
        Branch_Currency:data[0].BranchCurrency,
        Cost_Center:data[0].Cost_Center,
        Sales_Outlet:data[0].Sales_Outlet,
        warehouse:data[0].warehouse,
        stock_point:data[0].stock_point,
        Country:data[0].Country,
        State:data[0].State,
        empbranch_city:data[0].empbranch_city,
        Address:data[0].Address,
        B_Landline:data[0].B_Landline,
        B_Fax: data[0].B_Fax,
        B_Mobile_Number: data[0].B_Mobile_Number,
        B_Email: data[0].B_Email,
        B_Website: data[0].B_Website,
        B_TaxId: data[0].B_TaxId,
        // MD_PreferredContactPerson: ''
     });
  });

  $(document).ready(function() {
    $("#tabsecond").click();
  });
}
deleteEmployee(BranchId:number){
  this.employerBranchService.DeleteEmpbranch(BranchId).subscribe((data: any) => {
      if(data.ResponseMsg){
        this.toastr.success("Employer Branch Successfully Deleted.","Success");
        this.employerBranchService.getbranchlist(0).subscribe((data: any) => {
          this.branchList=data
      });
      
      }
    
  });
}
// deleteEmployee(Branch_ID: number) {
//   let empDelete: IEmployeeBranchDelete = {
//     BranchId: Branch_ID
//   }
//   this.employerBranchService.DeleteEmpbranch(empDelete).subscribe((data: any) => {
//     if(data.ResponseStatus){
//       this.toastr.success('Deleted Successfully.','Success')
//     }
   
//   });
// }

onSubmitPrimary() {


  let employeebranchData: IEmployeeBranchPost = {
    b_id:this.Isempbranchupdate?this.b_id:0,
      EmployerId: this.employerBranchForm.value.Employer_Id,
      BranchId: this.employerBranchForm.value.Branch_Id,
      BranchName: this.employerBranchForm.value.Branch_Name,
      manager_name: this.employerBranchForm.value.branc_manager_name,
      BranchCurrency: this.employerBranchForm.value.Branch_Currency,
      cost_center: this.employerBranchForm.value.Cost_Center,
      sales_outlet: this.employerBranchForm.value.Sales_Outlet,
      warehouse: this.employerBranchForm.value.warehouse,
      stock_point: this.employerBranchForm.value.stock_point,
      country_id: this.employerBranchForm.value.Country,
      state_id: this.employerBranchForm.value.State,
      city_id: this.employerBranchForm.value.empbranch_city,
      Address: this.employerBranchForm.value.Address,
      Landline: this.employerBranchForm.value.B_Landline,
      Fax: this.employerBranchForm.value.B_Fax,
      mobile_no: this.employerBranchForm.value.B_Mobile_Number,
      EmailAddress: this.employerBranchForm.value.B_Email,
      Website: this.employerBranchForm.value.B_Website,
      branch_taxid: this.employerBranchForm.value.B_TaxId,
  }

  this.employerBranchService.SetEmpbarch(employeebranchData).subscribe((data: any) => {
    if(data.ResponseMsg){
      this.toastr.success("Employer Branch Successfully Created.","Success");
    this.employerBranchService.getbranchlist(0).subscribe((data: any) => {
          this.branchList=data
      });
      $(document).ready(function() {
        $("#tabfirst").click();
      });
    }



  });


}

  empBranchServiceAPICall(){
    this.commonService. getEnterprisealllist().subscribe((data: any) => {
      this.enterprisealllist=data.Result;
     
    });
    this.commonService. getEnterpriseids().subscribe((data: any) => {
      this.erpriseids=data
      console.log(data);
    });
    this.commonService.getCountry().subscribe((data: any) => {
      this.countryList=data.Result;
     
    });
    this.commonService.getJobCatlogPriDetailes().subscribe((data: any) => {
      this.jobCatlogPriDetailes=data.Result;
      
    });
    this.employerBranchService.getbranchlist(0).subscribe((data: any) => {
       this.branchList=data.Result;
     
     });
   
    this.employerBranchService.getEmployeeriD().subscribe((data: any) => {
      this.employeeriDList=data.Result;
      
    });
    this.commonService.getOrganizationList(0).subscribe((data: any) => {
      this.organizationList=data.Result;
     
    });
    this.employerBranchService.getStatelist(0).subscribe((data: any) => {
      this.stateList=data.Result;
      
    });
  }
  

}
