import { Component, OnInit } from '@angular/core';
import {CommonService} from 'src/app/services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JournalService } from 'src/app/services';
import { JVPost } from 'src/app/models/vouchers.model';
declare var $:any;
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
  txtdate: Date;
  Accno: any;
  Isupdate: boolean;
  JvForm: FormGroup;
  submitted: boolean;
 
  accountno: string;
  Account: string;

  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,
    public toastr:ToastrService,
    public journalService:JournalService) { }

  ngOnInit(): void {
    this.apiCall();
    this.JvFormSetup();
  }
  JvFormSetup(){
    this.JvForm = this.formBuilder.group({
      Account_Number: [''],
      Account_Name: [''],
      Account_Type: [''],
      Vocher_No:[''],
      Employer_Id: [''],
      Branch_Id: [''],
      Oraganization_Id: [''],
      Project_Id: [''],
      Narration:[''],
      account_no:[''],
    });
  }
  
  get f() { return this.JvForm.controls; }
  
  selectedaccno(ac:string){
    this.Account=ac;
    this.JvForm.patchValue({
      account_no:ac
    });
    $(document).ready(function() {
      $('#Account').modal('hide');
    });
    
  }
  onSubmitPrimary() {
  
    this.submitted = true;
    console.log(this.JvForm.value)
    // stop here if form is invalid
    if (this.JvForm.invalid) {
        return;
    }
   
  
    let JVData: JVPost = {
      emp_id: this.JvForm.value.Employer_Id,
      b_id: this.JvForm.value.Branch_Id,
      o_id:this.JvForm.value.Oraganization_Id,
      project_id: 0,
      Narrationseg: this.JvForm.value.Narration,
      date: this.txtdate,
      vochernumber: this.JvForm.value.Vocher_No,
    
      
    }
  
    this.journalService.SetJvBulk(JVData).subscribe((data: any) => {
      if(data.ResponseMsg){
        this.toastr.success("Successfully Created.","Success");
        this.journalService.GetJv(0).subscribe((data: any) => {
          this.JVlist=data;
            this.Isupdate=true;
         
        });
       
      }
  
      // this.employerBranchService.getEmployeedetList().subscribe((data: any) => {
      //   this.employeedetList = data;
      //   this.Isupdate=true;
      // });
  
    });
  
  
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
  
    this.journalService.GetAccountnums().subscribe((data: any) => {
      this.Accno=data
    });
  }
}
