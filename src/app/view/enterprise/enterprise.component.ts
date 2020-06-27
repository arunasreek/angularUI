import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EnterpriseService } from 'src/app/services';
import { IEnterPriseDetailsPost } from 'src/app/models/enterprise.model';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

  employeedetList: any;
  countryList:any;
  erpriseids:any;
  jobCatlogPriDetailes:any;
  organizationList:any;
  Date_inception:Date;
  date_Ecpiry:Date;

  // fysd:Date;
  // fyed:Date;

  Isupdate:boolean;
  Isrenew:boolean;
  IsActive:boolean;
  IsInactive:boolean;

  enterpriseDetailsForm:FormGroup
  financeSettingsForm:FormGroup

  constructor(public commonService:CommonService,
               private formBuilder: FormBuilder,
               public toastr:ToastrService,
               public enterpriseService:EnterpriseService) { }

  ngOnInit(): void {
    this.apiCall();
    this.enterPriseFormSetup();
    this.financeSettingsFormSetup();
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

  
  financeSettingsFormSetup(){
    this.financeSettingsForm = this.formBuilder.group({
      Functional_Currency:[''],
      fysd:[''],
      fyed:['']
    });
  }

  get a() { return this.enterpriseDetailsForm.controls; }
  get b() { return this.financeSettingsForm.controls; }

  clearenterprisedata(){
    this.Date_inception=null;
    this.date_Ecpiry=null;

      this.enterpriseDetailsForm.reset();
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
      }
    });
  }


apiCall(){
  this.commonService.getEnterprisealllist().subscribe((data: any) => {
    this.employeedetList=data;
  });

  this.commonService.getCountry().subscribe((data: any) => {
    this.countryList=data
  });

  this.commonService.getEnterpriseids().subscribe((data: any) => {
    this.erpriseids=data
  });

  this.commonService.getJobCatlogPriDetailes().subscribe((data: any) => {
    this.jobCatlogPriDetailes=data
  });

  this.commonService.getOrganizationList(0).subscribe((data: any) => {
    this.organizationList=data
  });

}

}
