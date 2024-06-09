import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerBranchesService,EmployerService } from 'src/app/services';
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
  EmpList:any;
  countryList:any;
  employeeriDList:any;
  enterprisealllist:any;
  erpriseids:any;
  stateList:any;
  CitiesList:any;
  jobCatlogPriDetailes:any;
  organizationIDList:any;
  organizationList:any;
  Isorganizationupdate:boolean;
  Isempbranchupdate:boolean = false;
  Designation:string;
  BId:Number=0;
  o_id:number;
  p: number=1;
  submitted=false;

  employerBranchForm:FormGroup;
  b_id: number;

  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService,
    public employerBranchService:EmployerBranchesService,
    public employerService:EmployerService) { }

  ngOnInit(): void {
    this.empBranchServiceAPICall();
    this.employerBranchFormSetup();
  }
  
  employerBranchFormSetup(){
    this.employerBranchForm = this.formBuilder.group({
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

empbranchEdit(bId:number){
  this.branchList.forEach((data, index) => {
      if(data.bId == bId){
        this.BId = data.bId;
        this.employerBranchForm.setValue({
          Employer_Id:data.empId,
          Branch_ID:data.branchId,
          Branch_Name:data.branchName,
          branc_manager_name:data.managerName,
          Branch_Currency:data.branchCurrency,
          Cost_Center:Number(data.costCenter),
          Sales_Outlet:Number(data.salesOutlet),
          warehouse:Number(data.warehouse),
          stock_point:Number(data.stockPoint),
          Country:data.countryId,
          State:data.stateId,
          empbranch_city:data.branchCity,
          Address:data.address,
          B_Landline:data.landlineNo,
          B_Fax: data.fax,
          B_Mobile_Number: data.mobileNo,
          B_Email: data.email,
          B_Website: data.website,
          B_TaxId: data.branchTaxid,
          // MD_PreferredContactPerson: ''
       });
       this.Isempbranchupdate=true;
      }

      });

  // this.employerBranchService.getbranchlist(b_id).subscribe((data: any) => {
  
  //    this.employerBranchForm.setValue({
  //       Employer_Id:data[0].EmployerId,
  //       Branch_ID:data[0].b_id,
  //       Branch_Name:data[0].BranchName,
  //       branc_manager_name:data[0].manager_name,
  //       Branch_Currency:data[0].BranchCurrency,
  //       Cost_Center:data[0].Cost_Center,
  //       Sales_Outlet:data[0].Sales_Outlet,
  //       warehouse:data[0].warehouse,
  //       stock_point:data[0].stock_point,
  //       Country:data[0].Country,
  //       State:data[0].State,
  //       empbranch_city:data[0].empbranch_city,
  //       Address:data[0].Address,
  //       B_Landline:data[0].B_Landline,
  //       B_Fax: data[0].B_Fax,
  //       B_Mobile_Number: data[0].B_Mobile_Number,
  //       B_Email: data[0].B_Email,
  //       B_Website: data[0].B_Website,
  //       B_TaxId: data[0].B_TaxId,
  //       // MD_PreferredContactPerson: ''
  //    });
  // });

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
      BId:this.BId,
      EmpId: Number(this.employerBranchForm.value.Employer_Id),
      BranchId: (this.employerBranchForm.value.Branch_ID),
      BranchName: this.employerBranchForm.value.Branch_Name,
      ManagerName: this.employerBranchForm.value.branc_manager_name,
      BranchCurrency: this.employerBranchForm.value.Branch_Currency,
      CostCenter: Boolean(this.employerBranchForm.value.Cost_Center),
      SalesOutlet: Boolean(this.employerBranchForm.value.Sales_Outlet),
      Warehouse: Boolean(this.employerBranchForm.value.warehouse),
      StockPoint: Boolean(this.employerBranchForm.value.stock_point),
      CountryId: Number(this.employerBranchForm.value.Country),
      StateId: Number(this.employerBranchForm.value.State),
      // CityId: Number(this.employerBranchForm.value.empbranch_city),
      CityId:1,
      Address: this.employerBranchForm.value.Address,
      LandlineNo: this.employerBranchForm.value.B_Landline,
      Fax: this.employerBranchForm.value.B_Fax,
      MobileNo: this.employerBranchForm.value.B_Mobile_Number,
      Email: this.employerBranchForm.value.B_Email,
      Website: this.employerBranchForm.value.B_Website,
      BranchTaxid: this.employerBranchForm.value.B_TaxId,
  }

  console.log(employeebranchData);
  this.employerBranchService.SetEmpbarch(employeebranchData).subscribe((data: any) => {
    if(data){
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

    this.employerBranchService.getEmpBranchList().subscribe((data: any) => {
      this.branchList=data
      console.log(this.branchList);
    });

    this.employerService.getEmployersList().subscribe((data: any) => {
      this.EmpList=data
      console.log(this.EmpList);
    });

    this.commonService. getEnterprisealllist().subscribe((data: any) => {
      this.enterprisealllist=data
     
    });
    this.commonService. getEnterpriseids().subscribe((data: any) => {
      this.erpriseids=data
      console.log(data);
    });
    this.commonService.getCountry().subscribe((data: any) => {
      this.countryList=data
     
    });
    this.commonService.getJobCatlogPriDetailes().subscribe((data: any) => {
      this.jobCatlogPriDetailes=data
      
    });
    
   
    this.employerBranchService.getEmployeeriD().subscribe((data: any) => {
      this.employeeriDList=data
      
    });
    this.commonService.getCountry().subscribe((data: any) => {
      this.countryList=data
      console.log(this.countryList);
    });
    this.commonService.getCities().subscribe((data: any) => {
      this.CitiesList=data
      console.log(this.CitiesList);
    });
    this.commonService.getStates().subscribe((data: any) => {
      this.stateList=data
      console.log(this.stateList);
    });
    this.commonService.getOrganizationList(0).subscribe((data: any) => {
      this.organizationList=data
     
    });
    this.employerBranchService.getStatelist(0).subscribe((data: any) => {
      this.stateList=data
      
    });
  }
  

}
