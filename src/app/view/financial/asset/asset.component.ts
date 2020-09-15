import { Component, OnInit } from '@angular/core';
import {CommonService} from 'src/app/services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AssestsService } from 'src/app/services';
import {AssestsPost } from 'src/app/models/assests.model';
declare var $:any;

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  employeerID: any;
  projectList: any;
  assetList: any;
  supList: any;
  branchList: any;
  Acq_date:Date;
  War_Exp_date:Date;
  textdate:Date;
  Accno: any;
  AssestsForm: FormGroup;
  Account: string;
  submitted: boolean;

  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,
    public toastr:ToastrService,
    public assestsService:AssestsService) { }

  ngOnInit(): void {
    this.apiCall();
    this.AssestsFormSetup();
  }
  AssestsFormSetup(){
    this.AssestsForm = this.formBuilder.group({
      Account_Number: [''],
      Account_Name: [''],
      Account_Type: [''],
      vender_id:[''],
      Emp_id: [''],
      b_id: [''],
      Ass_id: [''],
      Ass_type: [''],
      Ass_desc:[''],
      AssetID:[''],
      
      account_no:[''],
    });
  }
  
  get f() { return this.AssestsForm.controls; }
  
  selectedaccno(ac:string){
    this.Account=ac;
    this.AssestsForm.patchValue({
      account_no:ac
    });
    $(document).ready(function() {
      $('#Account').modal('hide');
    });
    
  }
  onSubmitPrimary() {
  
    this.submitted = true;
    console.log(this.AssestsForm.value)
    // stop here if form is invalid
    if (this.AssestsForm.invalid) {
        return;
    }
   
  
    let AssestData: AssestsPost = {

      asset_id: 0,
      v_id: this.AssestsForm.value.vender_id,
      AssetID: this.AssestsForm.value.Ass_id,
      
      AssetType: this.AssestsForm.value.Ass_type,
      AssetDescription:this.AssestsForm.value.Ass_desc,
      AcquireDate: this.Acq_date,
      WarrentyExpiryDate: this.War_Exp_date,
      emp_id: this.AssestsForm.value.Emp_id,
      b_id: this.AssestsForm.value.b_id,
     
    }
  
    this.assestsService.SetAsset(AssestData).subscribe((data: any) => {
      if(data.ResponseMsg){
        this.toastr.success("Successfully Created.","Success");
        this.assestsService.GetAssetlist().subscribe(data => {
          this.assetList=data;
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
    this.assestsService.GetAssetlist().subscribe(data => {
      this.assetList=data;
      });
    this.assestsService.getEmployeeriD().subscribe((data: any) => {
      this.employeerID=data;
    });
    this.assestsService.Getbranchlist().subscribe((data: any) => {
      this.branchList=data
    });
    this.assestsService.GetprojctList().subscribe((data: any) => {
      this.projectList=data
    });
    this.assestsService.GetAccountnums().subscribe((data: any) => {
      this.Accno=data
    });
    this.assestsService.Getsuplist().subscribe((data: any) => {
      this.supList=data
    });
  
  
  }
}
