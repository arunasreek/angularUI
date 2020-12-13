import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EnterpriseService } from 'src/app/services';
import { IEnterPriseDetailsPost } from 'src/app/models/enterprise.model';
declare var $:any;

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {


  private gridApi;
  private gridColumnApi;
public rowData:any[];

  employeedetList: any;
  stateList:any;
  countryList:any;
  erpriseids:any;
  jobCatlogPriDetailes:any;
  organizationList:any;
  Date_inception:Date;
  date_Ecpiry:Date;
  p: number=1;

  Isupdate:boolean;
  Isrenew:boolean;
  IsActive:boolean;
  IsInactive:boolean;

  enterpriseDetailsForm:FormGroup

  constructor(public commonService:CommonService,
               private formBuilder: FormBuilder,
               public toastr:ToastrService,
               public enterpriseService:EnterpriseService) { }

  ngOnInit(): void {
    this.apiCall();
    this.enterPriseFormSetup();
  }

  enterPriseFormSetup()
  {
    this.enterpriseDetailsForm = this.formBuilder.group({
      Enterprise_ID:[''],
      Entname:[''],
      ParentEnt:[''],
      Prmreg:['']
    });
  }

  get a() { return this.enterpriseDetailsForm.controls; }

  clearenterprisedata(){
    this.Date_inception=null;
    this.date_Ecpiry=null;

      this.enterpriseDetailsForm.reset();
  }

  columnDefs = [
    {headerName: 'Enterprise ID',field:'EnterpriseID', width:135},
    {headerName: 'Enterprise Name', field: 'EnterpriseName', width:160},
    {headerName: 'Parent Enterprise', field: 'ParentEnterprise', width:160 },
    {headerName: 'Date Of Inception ', field: 'DateOfInception ', width:170 },
    {headerName: 'Date Of Expriy Date ', field: 'DateOfExpiry',width:175 },
    {headerName: 'Functional currency ', field: 'PrimaryFunctionalCurrency',width:175},
    {headerName: 'Financial Year', field: 'FinancialYearStartDate',width:150 },
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
 
  this.commonService.getEnterprisealllist().subscribe(data => {
    params.api.setRowData(data);
    });
  

}

  onSubmitEnterpriseDetails(){
    let enterPriseDetailsPost:IEnterPriseDetailsPost={
        ep_id:0,
        EnterpriseID :this.enterpriseDetailsForm.value.Enterprise_ID,
        EnterpriseName:this.enterpriseDetailsForm.value.Entname,
        ParentEnterprise:this.enterpriseDetailsForm.value.ParentEnt,
        PermanentRegistration:this.enterpriseDetailsForm.value.Prmreg,
        DateOfInception:this.Date_inception,
        DateOfExpiry:this.date_Ecpiry,
    }
    this.enterpriseService.setOrganization(enterPriseDetailsPost).subscribe((data:any)=>{
      if(data.ResponseMsg){
        this.toastr.success("Successfully Created.","Success");
        this.commonService.getEnterprisealllist().subscribe((data: any) => {
          this.employeedetList=data
          this.Isupdate=true;
        });
        $(document).ready(function() {
          $("#tabfirst").click();
        });
      }
    });
  }

apiCall(){
  this.commonService.getEnterprisealllist().subscribe((data: any) => {
    this.employeedetList=data.Result;
  });

  this.commonService.getCountry().subscribe((data: any) => {
    this.countryList=data.Result;
  });

  this.commonService.getEnterpriseids().subscribe((data: any) => {
    this.erpriseids=data.Result;
  });
  this.enterpriseService.getStatelist(0).subscribe((data: any) => {
    this.stateList=data.Result;
    
  });
  this.commonService.getJobCatlogPriDetailes().subscribe((data: any) => {
    this.jobCatlogPriDetailes=data.Result;
  });

  this.commonService.getOrganizationList(0).subscribe((data: any) => {
    this.organizationList=data.Result;
  });

}

}
