import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services';
import { IEmployerPost, IEmployeeDelete, IEmployeeEdit, IEmployeeWorkPermit } from 'src/app/models/employer.model';
import { map } from 'rxjs/operators';
import {NgxPaginationModule} from 'ngx-pagination';
declare var $:any;

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
public rowData:any={};
 

 Date_inception:Date;
 date_Ecpiry:Date;

branchList:any;
  countryList:any;
  employeeriDList:any;
  enterprisealllist:any;
  erpriseids:any;
  stateList:any;
  employersList: any;
  jobCatlogPriDetailes:any;
  organizationIDList:any;
  organizationList:any;
  Isorganizationupdate:boolean;
  Designation:string;
  o_id:number;
  p:number=1;


  employerForm: FormGroup;
  submitted: boolean;
  Isupdate: boolean;

  
  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService,
    public employerService:EmployerService,public pagination:NgxPaginationModule) { }

  ngOnInit(): void {
    this.employerServiceAPICall();
    this.employerFormSetup();
  }
  employerFormSetup(){
    this.employerForm = this.formBuilder.group({
      employee_id: [''],
      txtemprid: [''],
      ddlentraid: [''],
      txtemrname: [''],
      ddlprtcpy: [''],
      txtprtregno: [''],
      
    });
  }

  get f() { return this.employerForm.controls; }
  
  columnDefs = [
    {headerName: 'Employer ID',field:'EmployerID'},
    {headerName: 'Employer Name', field: 'EmployerName'},
    {headerName: 'Parent Company', field: 'ParentCompany' },
    {headerName: 'Date Of Inception ', field: 'DateOfInception ' },
    {headerName: 'Date Of Expriy ', field: 'DateOfInception' },
    {headerName: 'Contact Person ', field: 'AR_FistName' },
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
 
  this.employerService.getEmployersList().subscribe(data => {
     console.log(data,"List");
    params.api.setRowData(data);
    });
  

}

onSubmitPrimary() {

  this.submitted = true;
  console.log(this.employerForm.value)
  // stop here if form is invalid
  if (this.employerForm.invalid) {
      return;
  }
 

  let employerData: IEmployerPost = {
    ep_id:0,
        EnterpriseID :this.employerForm.value.ddlentraid,
        EmployerID:this.employerForm.value.txtemprid,
        EmployerName:this.employerForm.value.txtemrname,
        ParentCompany:this.employerForm.value.ddlprtcpy,
        PermanentRegistration:this.employerForm.value.txtprtregno,
        DateOfInception:this.Date_inception,
        DateOfExpiry:this.date_Ecpiry,
     
  }

  this.employerService.SetEmployerPrimarydet(employerData).subscribe((data: any) => {
    if(data.ResponseMsg){
      this.toastr.success("Employer  Successfully Created.","Success");
    this.employerService.getEmployersList().subscribe((data: any) => {
          this.employersList=data;
          this.Isupdate=true;
       
      });
      $(document).ready(function() {
        $("#tabfirst").click();
      });
    }

  });


}
  employerServiceAPICall(){
    this.employerService.getEmployersList().subscribe((data: any) => {
      this.employersList=data.Result;
    
  });

    this.commonService. getEnterpriseids().subscribe((data: any) => {
      this.erpriseids=data.Result;
     
    });
    this.commonService.getCountry().subscribe((data: any) => {
      this.countryList=data.Result;
     
    });
    this.commonService.getJobCatlogPriDetailes().subscribe((data: any) => {
      this.jobCatlogPriDetailes=data.Result;
      
    });
    this.employerService.getEmployeeriD().subscribe((data: any) => {
      this.employeeriDList=data.Result;
      
    });

  }
}
