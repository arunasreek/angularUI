import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EnterpriseService } from 'src/app/services';
import { IEnterPriseDetailsPost } from 'src/app/models/enterprise.model';
import { IEnterPriseDataConnSettings } from 'src/app/models/enterprise.model';
import { IFinancialSetting } from 'src/app/models/enterprise.model';
import { IOtherDetails } from 'src/app/models/enterprise.model';
import { tick } from '@angular/core/testing';
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
  FYEDate:Date;
  FYSDate:Date;
  p: number=1;
  EmpId:number;

  Isupdate:boolean;
  Isrenew:boolean;
  IsActive:boolean;
  IsInactive:boolean;

  enterpriseDetailsForm:FormGroup
  EnterpriselogoNbanner:FormGroup
  DataConnSettings:FormGroup
  financesettings:FormGroup
  OtherDetails:FormGroup


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
      txtentrapriceid:[''],
     // fileuploadBanner:[''],
      //fileuploadLogo:['']

    });
    this.DataConnSettings = this.formBuilder.group({
      Dloca:[''],
      Apploca:[''],
      Bckuploca:[''],
      mailserveridloca:['']
    });
    this.financesettings = this.formBuilder.group({
      FCur:[''],
      FYSDate: [''],
      FYEDate: [''],
      PeriodType:[''],
      emptn:[''],
      emppcn:[''],
      empdn:[''],
      empbn:['']
    });
    this.OtherDetails = this.formBuilder.group({
      Country:[''],
      State:[''],
      city:[''],
      Add1:[''],
      Add2:[''],
      p_box:[''],
      Zipcode:[''],
      Landline:[''],
      Fax:[''],
      Email:[''],
      Website:[''],
      ArEmployeeId:[''],
      f_name:[''],
      m_name:[''],
      l_name:[''],
      Email_a:[''],
      A_Desig:[''],
      A_Phone:[''],
      A_Fax:[''],
      A_m_No:[''],
      A_m_Email:[''],
      A_m_Tel:[''],
      A_m_mobile:[''],
      o_emp_id:[''],
      o_f_name:[''],
      o_m_name:[''],
      o_L_name:[''],
      o_Email:[''],
      o_Desig:[''],
      o_Phone:[''],
      o_Fax:[''],
      o_mobile:[''],
      o_Email_P:[''],
      o_T_P:[''],
      o_M_P:['']
    });

  }

  get a() { return this.enterpriseDetailsForm.controls; }

  clearenterprisedata(){
    this.Date_inception=null;
    this.date_Ecpiry=null;
    this.FYEDate = null;
    this.FYSDate = null;

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
    this.formData.append(this.EmpId.toString()+fieldName, file, file.name);
  }
  console.log(this.formData);
}


EntrpBannerUpload(event:any){
  var file = event.target.files[0];
 
  //this.formData.append('files',file,'bannerpic');
  this.formData.append('files',file);
  console.log(file);
}

EntrpLogoUpload(event:any){
  var file = event.target.files[0];
  this.formData.append('files',file);
  //this.formData.append('files',file,'logopic');
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


OnsubmitOtherDetails(){
  let OtherDetails:IOtherDetails={
    EpId:this.EmpId,
    EnterpriseID:this.enterpriseDetailsForm.value.Enterprise_ID,
    Country:this.OtherDetails.value.Country,
    State :this.OtherDetails.value.State,
    City : this.OtherDetails.value.city,
    Address1:this.OtherDetails.value.Add1,
    Address2 : this.OtherDetails.value.Add2,
    PostBox : this.OtherDetails.value.p_box,
    ZipCode : this.OtherDetails.value.Zipcode,
    LandLine : this.OtherDetails.value.Landline,
    Fax : this.OtherDetails.value.Fax,
    EmailAddress:this.OtherDetails.value.Email , 
    Website : this.OtherDetails.value.Website,
    ArEmployeeId :this.OtherDetails.value.ArEmployeeId,
    ArFirstName: this.OtherDetails.value.f_name,
    ArMiddleName : this.OtherDetails.value.m_name,
    ArLastName : this.OtherDetails.value.l_name,
    ArEmail : this.OtherDetails.value.Email_a,
    ArDesignation : this.OtherDetails.value.A_Desig,
    ArPhone : this.OtherDetails.value.A_Phone,
    ArFax : this.OtherDetails.value.A_Fax,
    ArMobileNo : this.OtherDetails.value.A_m_No,
    ArPreferredContactPerson :"Email",
    OcpEmployeeId : this.OtherDetails.value.o_emp_id,
    OcpFirstName : this.OtherDetails.value.o_f_name,
    OcpMiddleName : this.OtherDetails.value.o_m_name,
    OcpLastName : this.OtherDetails.value.o_L_name,
    OcpEmail : this.OtherDetails.value.o_Email,
    OcpDesignation: this.OtherDetails.value.o_Desig,
    OcpPhone : this.OtherDetails.value.o_Phone,
    OcpFax : this.OtherDetails.value.o_Fax,
    OcpMobileNo: this.OtherDetails.value.o_mobile,
    OcpPreferredContactPerson :"Email"
}

  console.log(OtherDetails);
  // this.enterpriseService.setOrganization(enterPriseDetailsPost)
  // .subscribe(data => console.log('success', data), error => console.log('error', error)) 

  this.enterpriseService.SetOtherDetails(OtherDetails).subscribe((data)=>{
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


onSubmitEnterpriseFinancialSetting(){
  let enterPriseFinsettings:IFinancialSetting={
    EpId:this.EmpId,
    EnterpriseID:this.enterpriseDetailsForm.value.Enterprise_ID,
    PrimaryFunctionalCurrency:this.financesettings.value.FCur,
    FinancialYearStartDate:this.FYSDate,
    FinancialYearEndDate: this.FYEDate,
    PayPeriodType:this.financesettings.value.PeriodType,
    EmployerTaxNo:this.financesettings.value.emptn,
    EmployerPanNo:this.financesettings.value.emppcn,
    EmployerDinNo:this.financesettings.value.empdn,
    EmployerBinNo:this.financesettings.value.empbn,
}
  console.log(enterPriseFinsettings);
  // this.enterpriseService.setOrganization(enterPriseDetailsPost)
  // .subscribe(data => console.log('success', data), error => console.log('error', error)) 

  this.enterpriseService.SetFinancialSettings(enterPriseFinsettings).subscribe((data)=>{
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

onSubmitEnterpriseDataConnSettings(){
  let enterPriseDatasettings:IEnterPriseDataConnSettings={
    EpId:this.EmpId,
    EnterpriseID:this.enterpriseDetailsForm.value.Enterprise_ID,
    Dblocation:this.DataConnSettings.value.Dloca,
    ApplicationLocation:this.DataConnSettings.value.Apploca,
    BackupLocation:this.DataConnSettings.value.Bckuploca,
    MailIdLocation:this.DataConnSettings.value.mailserveridloca
}
  console.log(enterPriseDatasettings);
  // this.enterpriseService.setOrganization(enterPriseDetailsPost)
  // .subscribe(data => console.log('success', data), error => console.log('error', error)) 

  this.enterpriseService.SetDataConnSettings(enterPriseDatasettings).subscribe((data)=>{
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
            Date_inception:new Date(item.financialYearStartDate),
            date_Ecpiry:new Date(item.financialYearStartDate),
            ParentEnt:"true"
           
          });
          this.EnterpriselogoNbanner.setValue({
            txtentrapriceid:item.enterpriseId,
            //fileuploadLogo:item.enterpriseLogo,
            //fileuploadBanner:item.enterpriseBanner
          });
          this.DataConnSettings.setValue({
            Dloca:item.dblocation ?? ' ',
            Apploca:item.applicationLocation ?? ' ',
            Bckuploca:item.backupLocation ?? ' ',
            mailserveridloca:item.mailIdLocation ?? ' '
          });
          this.financesettings.setValue({
            FCur:item.primaryFunctionalCurrency,
            FYSDate: new Date(item.financialYearStartDate),
            FYEDate: new Date(item.financialYearEndDate),
            PeriodType:item.payPeriodType,
            emptn:item.employerTaxNo,
            emppcn:item.employerPanNo,
            empdn:item.employerDinNo,
            empbn:item.employerBinNo
          });
          this.OtherDetails.setValue({
            Country:item.country,
            State:item.state,
            city:item.city,
            Add1:item.address1,
            Add2:item.address2,
            p_box:item.postBox,
            Zipcode:item.zipCode,
            Landline:item.landLine,
            Fax:item.fax,
            Email:item.emailAddress,
            Website:item.website,
            ArEmployeeId:item.arEmployeeId,
            f_name:item.arFirstName,
            m_name:item.arMiddleName,
            l_name:item.arLastName,
            Email_a:item.arEmail,
            A_Desig:item.arDesignation,
            A_Phone:item.arPhone,
            A_Fax:item.arFax,
            A_m_No:item.arMobileNo,
            A_m_Email:true,
            o_emp_id:item.ocpEmployeeId,
            o_f_name:item.ocpFirstName,
            o_m_name:item.ocpMiddleName,
            o_L_name:item.ocpLastName,
            o_Email:item.ocpEmail,
            o_Desig:item.ocpDesignation,
            o_Phone:item.ocpPhone,
            o_Fax:item.ocpFax,
            o_mobile:item.ocpMobileNo,
            o_Email_P:true,
            A_m_Tel:false,
            A_m_mobile:false,
            o_T_P:false,
            o_M_P:false
          })
          this.Isupdate=true;
          //this.enterpriseDetailsForm.get('ParentEnt').setValue('true');

          // this.enterpriseDetailsForm.value.Enterprise_ID = item.enterpriseId,
          // this.enterpriseDetailsForm.value.Entname = item.enterpriseName,
          // // this.enterpriseDetailsForm.value.ParentEnt = ,
          // this.enterpriseDetailsForm.value.Prmreg = item.permanentRegistration,
          // this.Date_inception = item.dateOfInception,
          // this.date_Ecpiry = item.dateOfExpiry
          console.log(this.DataConnSettings);
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
