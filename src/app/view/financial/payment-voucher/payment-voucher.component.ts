import { Component, OnInit } from '@angular/core';
import {CommonService} from 'src/app/services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReceiptService } from 'src/app/services';
import { IChartPost } from 'src/app/models/financial.model';

@Component({
  selector: 'app-payment-voucher',
  templateUrl: './payment-voucher.component.html',
  styleUrls: ['./payment-voucher.component.css']
})
export class PaymentVoucherComponent implements OnInit {

  projectList: any;
  bankNames: any;
  RVlist: any;
  employerId: any;
  organizationID: any;
  branchList: any;


  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,
    public toastr:ToastrService,
    public receiptService:ReceiptService) { }

  ngOnInit(): void {
    this.apiCall();
  }
  apiCall(){
    this.receiptService.GetBanknames(0).subscribe(data => {
      this.bankNames=data;
      });
    this.receiptService.GetRv('PV').subscribe((data: any) => {
      this.RVlist=data;
    });
  
    this.receiptService.GetprojectList().subscribe((data: any) => {
      this.projectList=data
    });
  
    this.receiptService.GetEmployeeriD().subscribe((data: any) => {
      this.employerId=data
    });
    
    this.receiptService.Getbranchlist().subscribe((data: any) => {
      this.branchList=data
    });
  
    this.receiptService.getOrganizationID().subscribe((data: any) => {
      this.organizationID=data
    });
  
  }
}
