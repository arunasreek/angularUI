import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerBranchesService } from 'src/app/services';

@Component({
  selector: 'app-empbranch',
  templateUrl: './empbranch.component.html',
  styleUrls: ['./empbranch.component.css']
})
export class EmpbranchComponent implements OnInit {
  
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
  Designation:string;
  o_id:number;

  employerBranchForm:FormGroup;

  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService,
    public employerBranchService:EmployerBranchesService) { }

  ngOnInit(): void {
    this.empBranchServiceAPICall();
  }
  employerBranchFormSetup(){
    this.employerBranchForm = this.formBuilder.group({
    
    });
  }

  get f() { return this.employerBranchForm.controls; }

  empBranchServiceAPICall(){
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
    this.employerBranchService.getbranchlist(0).subscribe((data: any) => {
       this.branchList=data
     
     });
   
    this.employerBranchService.getEmployeeriD().subscribe((data: any) => {
      this.employeeriDList=data
      
    });
    this.commonService.getCountry().subscribe((data: any) => {
      this.countryList=data
      
    });
    this.commonService.getOrganizationList(0).subscribe((data: any) => {
      this.organizationList=data
     
    });
    this.employerBranchService.getStatelist(0).subscribe((data: any) => {
      this.stateList=data
      
    });
  }

}
