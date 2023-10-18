import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EnterpriseService } from 'src/app/services';
import { IEnterPriseDetailsPost } from 'src/app/models/enterprise.model';
declare var $:any;

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {


  private gridApi;
  private gridColumnApi;
public rowData:any[];
 formData:FormData = new FormData();
  employeedetList: any;
  stateList:any;
  countryList:any;
  erpriseids:any;
  jobCatlogPriDetailes:any;
  organizationList:any;
  Date_inception:Date;
  date_Ecpiry:Date;
  p: number=1;
  EmpId:number;

  Isupdate:boolean;
  Isrenew:boolean;
  IsActive:boolean;
  IsInactive:boolean;

  enterpriseDetailsForm:FormGroup
  EnterpriselogoNbanner:FormGroup

  constructor(public commonService:CommonService,
               private formBuilder: FormBuilder,
               public toastr:ToastrService,
               public enterpriseService:EnterpriseService) { }

  ngOnInit(): void {
    this.apiCall();
    this.enterPriseFormSetup();
  }


  enterPriseFormSetup()
  {
    this.enterpriseDetailsForm = this.formBuilder.group({
      Enterprise_ID:[''],
      Entname:[''],
      ParentEnt:[''],
      Prmreg:[''],
      Date_inception:[''],
      date_Ecpiry:['']
    });
    this.EnterpriselogoNbanner = this.formBuilder.group({
      txtentrapriceid:['']

    })
  }

  get a() { return this.enterpriseDetailsForm.controls; }

  clearenterprisedata(){
    this.Date_inception=null;
    this.date_Ecpiry=null;

      this.enterpriseDetailsForm.reset();
  }

  columnDefs = [
    {headerName: 'Enterprise ID',field:'EnterpriseID', width:135},
    {headerName: 'Enterprise Name', field: 'EnterpriseName', width:160},
    {headerName: 'Parent Enterprise', field: 'ParentEnterprise', width:160 },
    {headerName: 'Date Of Inception ', field: 'DateOfInception ', width:170 },
    {headerName: 'Date Of Expriy Date ', field: 'DateOfExpiry',width:175 },
    {headerName: 'Functional currency ', field: 'PrimaryFunctionalCurrency',width:175},
    {headerName: 'Financial Year', field: 'FinancialYearStartDate',width:150 },
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
 
  this.commonService.getEnterprisealllist().subscribe(data => {
    params.api.setRowData(data);
    });
  

}

onFileSelected(event: any, fieldName: string) {
  const file = event.target.files[0];
  if (file) {
    this.formData.append(fieldName, file, file.name);
  }
  console.log(this.formData);
}


EntrpBannerUpload(event:any){
  var file = event.target.files[0];
 
  this.formData.append('banner',file,'bannerpic');
  console.log(file);
}

EntrpLogoUpload(event:any){
  var file = event.target.files[0];
 
  this.formData.append('logo',file,'logopic');
  console.log(file);
}

onSubmitEnterpriseDetailslogonbanner(){
  this.enterpriseService.uploadlogoNbanner(this.formData).subscribe((data)=>{
    if(data){
     this.toastr.success("Successfully Created.","Success");
     this.commonService.getEnterprisealllist().subscribe((data: any) => {
       this.employeedetList=data
       this.Isupdate=true;
     });
     $(document).ready(function() {
       $("#tabfirst").click();
     });
    }
   // alert("Saved");
   
 },
 (error) => {
   console.log('POST request failed', error);
 }
 );
}

  onSubmitEnterpriseDetails(){
    let enterPriseDetailsPost:IEnterPriseDetailsPost={
      ep_id:'',
      EpId:0,
      EnterpriseID :this.enterpriseDetailsForm.value.Enterprise_ID,
      EnterpriseName:this.enterpriseDetailsForm.value.Entname,
      ParentEnterprise: Boolean(this.enterpriseDetailsForm.value.ParentEnt),
      PermanentRegistration:this.enterpriseDetailsForm.value.Prmreg,
      DateOfInception:this.Date_inception,
      DateOfExpiry:this.date_Ecpiry,
  }
    console.log(enterPriseDetailsPost);
    // this.enterpriseService.setOrganization(enterPriseDetailsPost)
    // .subscribe(data => console.log('success', data), error => console.log('error', error)) 

    this.enterpriseService.setOrganization(enterPriseDetailsPost).subscribe((data)=>{
       if(data){
        this.toastr.success("Successfully Created.","Success");
        this.commonService.getEnterprisealllist().subscribe((data: any) => {
          this.employeedetList=data
          this.Isupdate=true;
        });
        $(document).ready(function() {
          $("#tabfirst").click();
        });
       }
      // alert("Saved");
      
    },
    (error) => {
      // Handle any errors that occur during the request
      console.log('POST request failed', error);
    }
    );
  }

  UpdateEnterpriseDetails(){
    console.log(this.EmpId);
    let enterPriseDetailsPost:IEnterPriseDetailsPost={
      ep_id:'',
      EpId:this.EmpId,
      EnterpriseID :this.enterpriseDetailsForm.value.Enterprise_ID,
      EnterpriseName:this.enterpriseDetailsForm.value.Entname,
      ParentEnterprise: Boolean(this.enterpriseDetailsForm.value.ParentEnt),
      PermanentRegistration:this.enterpriseDetailsForm.value.Prmreg,
      DateOfInception:this.Date_inception,
      DateOfExpiry:this.date_Ecpiry,
  }
    console.log(enterPriseDetailsPost);
    // this.enterpriseService.setOrganization(enterPriseDetailsPost)
    // .subscribe(data => console.log('success', data), error => console.log('error', error)) 

    this.enterpriseService.setOrganization(enterPriseDetailsPost).subscribe((data)=>{
       if(data){
        this.toastr.success("Updated Successfullt.","Success");
        this.commonService.getEnterprisealllist().subscribe((data: any) => {
          this.employeedetList=data
          this.Isupdate=true;
        });
        $(document).ready(function() {
          $("#tabfirst").click();
        });
       }
      // alert("Saved");
      
    },
    (error) => {
      // Handle any errors that occur during the request
      console.log('POST request failed', error);
    }
    );
  }

  GetEnterprise(epId:number){
    // this.commonService.getEnterpriseById(epId).subscribe((data: any) => {
      // this.employeedetList=data
        // console.log(data);
      // this.Isupdate=true;
      this.employeedetList.forEach((item, index) => {
        // console.log(`Item at index ${index}: ${item}`);
        if(item.epId == epId){
          console.log(item)
          this.EmpId = item.epId;
          this.enterpriseDetailsForm.setValue({
            Enterprise_ID: item.enterpriseId,
            Entname:item.enterpriseName,
            Prmreg:item.permanentRegistration,
            Date_inception:new Date(item.dateOfInception),
            date_Ecpiry:new Date(item.dateOfExpiry),
            ParentEnt:"true"
           
          });
          this.EnterpriselogoNbanner.setValue({
            txtentrapriceid:item.enterpriseId
          });
          this.Isupdate=true;
          //this.enterpriseDetailsForm.get('ParentEnt').setValue('true');

          // this.enterpriseDetailsForm.value.Enterprise_ID = item.enterpriseId,
          // this.enterpriseDetailsForm.value.Entname = item.enterpriseName,
          // // this.enterpriseDetailsForm.value.ParentEnt = ,
          // this.enterpriseDetailsForm.value.Prmreg = item.permanentRegistration,
          // this.Date_inception = item.dateOfInception,
          // this.date_Ecpiry = item.dateOfExpiry
          console.log( this.enterpriseDetailsForm);
        }
      });
     
    // });
  }

apiCall(){
  this.commonService.getEnterprisealllist().subscribe((data: any) => {
    this.employeedetList=data;
    console.log(this.employeedetList );
  });

  this.commonService.getCountry().subscribe((data: any) => {
    this.countryList=data
  });

  this.commonService.getEnterpriseids().subscribe((data: any) => {
    this.erpriseids=data
  });
  this.enterpriseService.getStatelist(0).subscribe((data: any) => {
    this.stateList=data
    
  });
  this.commonService.getJobCatlogPriDetailes().subscribe((data: any) => {
    this.jobCatlogPriDetailes=data
  });

  this.commonService.getOrganizationList(0).subscribe((data: any) => {
    this.organizationList=data
  });

}

}
