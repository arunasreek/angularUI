import { Component, OnInit } from '@angular/core';
import {CommonService} from 'src/app/services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReceiptService } from 'src/app/services';
import { PVPost } from 'src/app/models/vouchers.model';
declare var $:any;
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
  date: Date;
  Accno: any;
  PvForm: FormGroup;
  Account: string;
  submitted: boolean;
  date_of_cheque: Date;
  


  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,
    public toastr:ToastrService,
    public receiptService:ReceiptService) { }

  ngOnInit(): void {
    this.apiCall();
    this.PvFormSetup();
  }
  PvFormSetup(){
    this.PvForm = this.formBuilder.group({
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
  
  get f() { return this.PvForm.controls; }
  
  selectedaccno(ac:string){
    this.Account=ac;
    this.PvForm.patchValue({
      account_no:ac
    });
    $(document).ready(function() {
      $('#Account').modal('hide');
    });
    
  }
  onSubmitPrimary() {
  
    this.submitted = true;
    console.log(this.PvForm.value)
    // stop here if form is invalid
    if (this.PvForm.invalid) {
        return;
    }
   
  
    let PVData: PVPost = {
      receipt_no: this.PvForm.value.receipt_no,
      date: this.date,
      received_amount: this.PvForm.value.received_amount,
      amount_in_words: this.PvForm.value,
      received_from:this.PvForm.value.received_from,
      invoice_no: this.PvForm.value.invoice_no,
      employer_id:this.PvForm.value.employer_id,
      branchid: this.PvForm.value.branchid,
      org_un_id: this.PvForm.value.org_un_id,
      projectid: this.PvForm.value.projectid,
      currency: this.PvForm.value.currency,
      narration: this.PvForm.value.narration,
      bank_name: this.PvForm.value.bankname,
      branch: this.PvForm.value.branch,
      date_of_cheque: this.date_of_cheque,
      cheque_number: this.PvForm.value.cheque_number,
      Amount:this.PvForm.value.Amount,
      TransactionType: this.PvForm.value.transaction_type,
      Type: "PV",
    }
  
    this.receiptService.SetPvBulk(PVData).subscribe((data: any) => {
      if(data.ResponseMsg){
        this.toastr.success("Successfully Created.","Success");
        this.receiptService.GetRv('PV').subscribe((data: any) => {
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
    this.receiptService.GetAccountnums().subscribe((data: any) => {
      this.Accno=data
    });
  }
}
