import { Component, OnInit } from '@angular/core';
import {CommonService} from 'src/app/services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReceiptService } from 'src/app/services';
import { RVPost } from 'src/app/models/vouchers.model';
declare var $:any;
@Component({
  selector: 'app-receipt-voucher',
  templateUrl: './receipt-voucher.component.html',
  styleUrls: ['./receipt-voucher.component.css']
})
export class ReceiptVoucherComponent implements OnInit {
  projectList: any;
  bankNames: any;
  RVlist: any;
  employerId: any;
  organizationID: any;
  branchList: any;
  date: Date;
  Accno: any;
  RvForm: FormGroup;
  Account: string;
  submitted: boolean;
  date_of_cheque: Date;

  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,
    public toastr:ToastrService,
    public receiptService:ReceiptService) { }

  ngOnInit(): void {
    this.apiCall();
    this.RvFormSetup();
  }
  RvFormSetup(){
    this.RvForm = this.formBuilder.group({
      receipt_no:[''],
      received_amount:[''],
      received_from:[''],
      invoice_no:[''],
      currency:[''],
      narration:[''],
      Account_Number: [''],
      Account_Name: [''],
      Account_Type: [''],
      Vocher_No:[''],
      employer_id: [''],
      branchid: [''],
      org_un_id: [''],
      projectid: [''],
      account_no:[''],
      branch:[''],
      cheque_number:[''],
      Amount:[''],
      transaction_type:[''],
    });
  }
  
  get f() { return this.RvForm.controls; }
  
  selectedaccno(ac:string){
    this.Account=ac;
    this.RvForm.patchValue({
      account_no:ac
    });
    $(document).ready(function() {
      $('#Account').modal('hide');
    });
    
  }
  onSubmitPrimary() {
  
    this.submitted = true;
    console.log(this.RvForm.value)
    // stop here if form is invalid
    if (this.RvForm.invalid) {
        return;
    }
   
  
    let RVData: RVPost = {
      receipt_no: this.RvForm.value.receipt_no,
      date: this.date,
      received_amount: this.RvForm.value.received_amount,
      amount_in_words: this.RvForm.value,
      received_from:this.RvForm.value.received_from,
      invoice_no: this.RvForm.value.invoice_no,
      employer_id:this.RvForm.value.employer_id,
      branchid: this.RvForm.value.branchid,
      org_un_id: this.RvForm.value.org_un_id,
      projectid: this.RvForm.value.projectid,
      currency: this.RvForm.value.currency,
      narration: this.RvForm.value.narration,
      bank_name: this.RvForm.value.bankname,
      branch: this.RvForm.value.branch,
      date_of_cheque: this.date_of_cheque,
      cheque_number: this.RvForm.value.cheque_number,
      Amount:this.RvForm.value.Amount,
      TransactionType: this.RvForm.value.transaction_type,
      Type: "RV",
    }
  
    this.receiptService.SetRvBulk(RVData).subscribe((data: any) => {
      if(data.ResponseMsg){
        this.toastr.success("Successfully Created.","Success");
        this.receiptService.GetRv('RV').subscribe((data: any) => {
          this.RVlist=data;
            // this.Isupdate=true;
         
        });
       
      }
  
      // this.employerBranchService.getEmployeedetList().subscribe((data: any) => {
      //   this.employeedetList = data;
      //   this.Isupdate=true;
      // });
  
    });
  
  
  }
  apiCall(){
    this.receiptService.GetBanknames(0).subscribe(data => {
      this.bankNames=data;
      });
    this.receiptService.GetRv('RV').subscribe((data: any) => {
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
    this.receiptService.GetAccountnums().subscribe((data: any) => {
      this.Accno=data
    });
  }
}
