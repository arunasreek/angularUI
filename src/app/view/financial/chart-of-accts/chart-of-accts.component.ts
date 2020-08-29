import { Component, OnInit } from '@angular/core';

import {CommonService} from 'src/app/services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CharofAcctsService } from 'src/app/services';
import { IChartPost } from 'src/app/models/financial.model';
declare var $:any;


@Component({
  selector: 'app-chart-of-accts',
  templateUrl: './chart-of-accts.component.html',
  styleUrls: ['./chart-of-accts.component.css']
})
export class ChartOfAcctsComponent implements OnInit {


  private gridApi;
  private gridColumnApi;
public rowData:any[];
  organizationID: any;
  erpriseids: any;
  employeerID: any;
  projectList: any;
  JV: any;
  branchList: any;
  chartList: any;
  chartForm: FormGroup;
  submitted: boolean;
  Isupdate: boolean;


  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,
    public toastr:ToastrService,
    public charofAcctsService:CharofAcctsService) { }

  ngOnInit(): void {
    this.apiCall();
    this. chartFormSetup();
  }
  chartFormSetup(){
    this.chartForm = this.formBuilder.group({
      Account_Number: [''],
      Account_Name: [''],
      Account_Type: [''],
      O_Branch_Id: [''],
      Budget_Amount: [''],
      Opening_Balance_Imported: [''],
      Enterprise_Id: [''],
      Employer_Id: [''],
      Branch_Id: [''],
      Oraganization_Id: [''],
      O_Email_Address: [''],
      Parent_Group: [''],
      Current_Ledger_balance: [''],
      Project_Id: [''],
      
    });
  }
  
  get f() { return this.chartForm.controls; }
  
  
  onSubmitPrimary() {
  
    this.submitted = true;
    console.log(this.chartForm.value)
    // stop here if form is invalid
    if (this.chartForm.invalid) {
        return;
    }
   
  
    let chartData: IChartPost = {
      asset_id:this.chartForm.value.asset_id,
      supp_id: this.chartForm.value.sub_id,
      cust_id:this.chartForm.value.cust_id,
      id: 0,
      AccountNumber: this.chartForm.value.Account_Number,
      AccountName: this.chartForm.value.Account_Name,
      AccountType: this.chartForm.value.Account_Type,
      Opening_Bal: this.chartForm.value.O_Branch_Id,
      Budget_Amount: this.chartForm.value.Budget_Amount,
      Opening_Balance_Imported: this.chartForm.value.Opening_Balance_Imported,
      Ep_id: this.chartForm.value.Enterprise_Id,
      emp_id: this.chartForm.value.Employer_Id,
      b_id: this.chartForm.value.Branch_Id,
      o_id:this.chartForm.value.Oraganization_Id,
      AccountGroupCode:this.chartForm.value.O_Email_Address,
      ParentGroup:this.chartForm.value.Parent_Group,
      CurrentLedgerBalance: this.chartForm.value.Current_Ledger_balance,
      Project_Id:this.chartForm.value.Project_Id,
    }
  
    this.charofAcctsService.SetFinanceChartAccount(chartData).subscribe((data: any) => {
      if(data.ResponseMsg){
        this.toastr.success("Successfully Created.","Success");
        this.charofAcctsService.GetChatofaccList().subscribe(data => {
          this.chartList=data;
            this.Isupdate=true;
         
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
    {headerName: 'Chart of Account ID',field:'id'},
    {headerName: 'Account Number', field: 'AccountNumber'},
    {headerName: 'Account Name', field: 'AccountName'},
    {headerName: 'Account Type', field: 'AccountType' },
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
 
  this.charofAcctsService.GetChatofaccList().subscribe(data => {
    params.api.setRowData(data);
    });
  

}

apiCall(){
  this.charofAcctsService.GetChatofaccList().subscribe(data => {
    this.chartList=data;
    });
  this.charofAcctsService.getEmployeeriD().subscribe((data: any) => {
    this.employeerID=data;
  });

  this.charofAcctsService.GetprojctList().subscribe((data: any) => {
    this.projectList=data
  });

  this.charofAcctsService.getEnterpriseids().subscribe((data: any) => {
    this.erpriseids=data
  });
  this.charofAcctsService.getJv(0).subscribe((data: any) => {
    this.JV=data
    
  });
  this.charofAcctsService.getbranchlist().subscribe((data: any) => {
    this.branchList=data
  });

  this.charofAcctsService.getOrganizationID().subscribe((data: any) => {
    this.organizationID=data
  });

}

 


}
