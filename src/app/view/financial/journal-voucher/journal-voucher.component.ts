import { Component, OnInit } from '@angular/core';
import {CommonService} from 'src/app/services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JournalService } from 'src/app/services';
import { IChartPost } from 'src/app/models/financial.model';

@Component({
  selector: 'app-journal-voucher',
  templateUrl: './journal-voucher.component.html',
  styleUrls: ['./journal-voucher.component.css']
})
export class JournalVoucherComponent implements OnInit {
  organizationID: any;
  branchList: any;
  employerId: any;
  JVlist: any;
  projectList: any;
  ChartList: any;
  enterpriseids: any;

  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,
    public toastr:ToastrService,
    public journalService:JournalService) { }

  ngOnInit(): void {
    this.apiCall();
  }
  apiCall(){
    this.journalService.GetEnterpriseids().subscribe(data => {
      this.enterpriseids=data;
      });
      this.journalService.GetChatofaccList().subscribe(data => {
        this.ChartList=data;
        });
    this.journalService.GetJv(0).subscribe((data: any) => {
      this.JVlist=data;
    });
  
    this.journalService.Getprojectlist().subscribe((data: any) => {
      this.projectList=data
    });
  
    this.journalService.GetEmployeeriD().subscribe((data: any) => {
      this.employerId=data
    });
    
    this.journalService.Getbranchlist().subscribe((data: any) => {
      this.branchList=data
    });
  
    this.journalService.getOrganizationID().subscribe((data: any) => {
      this.organizationID=data
    });
  
  }
}
