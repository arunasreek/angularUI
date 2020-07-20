import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {CustomerService } from 'src/app/services';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService,
    public customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerServiceAPICall();
  }
  customerServiceAPICall(){
    this.commonService. getEnterprisealllist().subscribe((data: any) => {
      // this.enterprisealllist=data
     
    });
    this.customerService. getCustomerList(0).subscribe((data: any) => {
      // this.enterprisealllist=data
     
    });
    this.commonService. getEnterpriseids().subscribe((data: any) => {
      // this.erpriseids=data
      console.log(data);
    });
    this.commonService.getCountry().subscribe((data: any) => {
      // this.countryList=data
     
    });
    this.commonService.getJobCatlogPriDetailes().subscribe((data: any) => {
      // this.jobCatlogPriDetailes=data
      
    });
    
    this.commonService.getCountry().subscribe((data: any) => {
      // this.countryList=data
      
    });
    this.commonService.getOrganizationList(0).subscribe((data: any) => {
      // this.organizationList=data
     
    });
   

  }
}
