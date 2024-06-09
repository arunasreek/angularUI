import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services';
import { IEmployerPost, IEmployeeDelete, IEmployeeEdit, IEmployeeWorkPermit,IFinancialSetting,IOtherDetails } from 'src/app/models/employer.model';
import { map } from 'rxjs/operators';
import {NgxPaginationModule} from 'ngx-pagination';
declare var $:any;

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
public rowData:any={};
 

  Date_inception:Date;
  date_Ecpiry:Date;
  FYSDate:Date;
  FYEDate:Date;
  formData:FormData = new FormData();
  EmployerID:any;
  branchList:any;
  empId:any;
  countryList:any;
  employeeriDList:any;
  enterprisealllist:any;
  erpriseids:any;
  stateList:any;
  employersList: any;
  enterpriseList:any;
  jobCatlogPriDetailes:any;
  organizationIDList:any;
  organizationList:any;
  Isorganizationupdate:boolean;
  Designation:string;
  o_id:number;
  p:number=1;


  employerForm: FormGroup;
  employerUploadBanner:FormGroup;
  employerFinancialSettings:FormGroup;
  OtherDetails:FormGroup
  submitted: boolean;
  Isupdate: boolean;

  
  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,public toastr:ToastrService,
    public employerService:EmployerService,public pagination:NgxPaginationModule) { }

  ngOnInit(): void {
    this.employerServiceAPICall();
    this.employerFormSetup();
  }
  employerFormSetup(){
    this.employerForm = this.formBuilder.group({
      //employee_id: [''],
      txtemprid: [''],
      ddlentraid: [''],
      txtemrname: [''],
      ddlprtcpy: [''],
      txtprtregno: [''],
      Date_inception:[''],
      date_Ecpiry:['']
    });
    this.employerUploadBanner = this.formBuilder.group({
      txtempid:[''],
    });
    this.employerFinancialSettings = this.formBuilder.group({
      ddlpfcurcy:[''],
      FYSDate:[''],
      FYEDate:[''],
      ddlpyprd:[''],
      txtemrtaxno:[''],
      txtemrpanno:[''],
      txtemrdinno:[''],
      txtemrbnno:[''],
      // IVM:['']
    });
    this.OtherDetails = this.formBuilder.group({
      employerId:[''],
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

  get f() { return this.employerForm.controls; }
  
  columnDefs = [
    {headerName: 'Employer ID',field:'EmployerID'},
    {headerName: 'Employer Name', field: 'EmployerName'},
    {headerName: 'Parent Company', field: 'ParentCompany' },
    {headerName: 'Date Of Inception ', field: 'DateOfInception ' },
    {headerName: 'Date Of Expriy ', field: 'DateOfInception' },
    {headerName: 'Contact Person ', field: 'AR_FistName' },
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
 
  this.employerService.getEmployersList().subscribe(data => {
     console.log(data,"List");
    params.api.setRowData(data);
    });
  

}

onFileSelected(event: any, fieldName: string) {
  const file = event.target.files[0];
  if (file) {
    this.formData.append(this.EmployerID.toString()+fieldName, file, file.name);
  }
  console.log(this.formData);
}


onSubmitPrimary() {

  this.submitted = true;
  console.log(this.employerForm.value)
  // stop here if form is invalid
  if (this.employerForm.invalid) {
    alert("Pelase Fill All Mandetory feilds");
      return;
  }
 

  let employerData: IEmployerPost = {
        EpId :this.employerForm.value.ddlentraid,
        EmployerID:this.employerForm.value.txtemprid,
        EmployerName:this.employerForm.value.txtemrname,
        ParentCompany:this.employerForm.value.ddlprtcpy,
        PermanentRegistration:this.employerForm.value.txtprtregno,
        DateOfInception:this.Date_inception,
        DateOfExpiry:this.date_Ecpiry,
     
  }
  console.log(employerData);
  this.employerService.SetEmployerPrimarydet(employerData).subscribe((data: any) => {
    if(data){
        this.toastr.success("Employer  Successfully Created.","Success");
          this.employerService.getEmployersList().subscribe((data: any) => {
          this.employersList=data
          this.Isupdate=true;
       
      });
      $(document).ready(function() {
        $("#lifirsttab").click();
      });
    }

  });


}

onuploadBanner(){
  this.employerService.uploadlogoNbanner(this.formData).subscribe((data)=>{
    if(data){
     this.toastr.success("Successfully Uploaded.","Success");
     this.employerService.getEmployersList().subscribe((data: any) => {
       this.employersList=data
       this.Isupdate=true;
     });
     $(document).ready(function() {
       $("#lifirsttab").click();
     });
    }
   // alert("Saved");
   
 },
 (error) => {
   console.log('POST request failed', error);
 }
 );
}

setEmpFinancialSettings(){
  let empFinsettings:IFinancialSetting={
    EmpId:this.empId,
    EmployerID:this.employerForm.value.txtemprid,
    EmployerName:this.employerForm.value.txtemrname,
    ParentCompany:this.employerForm.value.ddlprtcpy,
    PermanentRegistration:this.employerForm.value.txtprtregno,
    PrimaryFunctionalCurrency:this.employerFinancialSettings.value.ddlpfcurcy,
    PayPeriodType:this.employerFinancialSettings.value.ddlpyprd,
    EmployerTaxNo:this.employerFinancialSettings.value.txtemrtaxno,
    EmployerPanNo:this.employerFinancialSettings.value.txtemrpanno,
    EmployerDinNo:this.employerFinancialSettings.value.txtemrdinno,
    EmployerBinNo:this.employerFinancialSettings.value.txtemrbnno,
    FinancialYearStartDate:this.FYSDate,
    FinancialYearEndDate:this.FYEDate
}
  console.log(empFinsettings);

  this.employerService.SetFinancialSettings(empFinsettings).subscribe((data)=>{
     if(data){
      this.toastr.success("Successfully Created.","Success");
      this.commonService.getEnterprisealllist().subscribe((data: any) => {
        this.employersList=data
        this.Isupdate=true;
      });
      $(document).ready(function() {
        $("#lifirsttab").click();
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
OnsubmitOtherDetails(){
  let OtherDetails:IOtherDetails={
    EmpId:this.empId,
    EmployerId:this.OtherDetails.value.employerId,
    EmployerName:this.employerForm.value.txtemrname,
    ParentCompany:this.employerForm.value.ddlprtcpy,
    PermanentRegistration:this.employerForm.value.txtprtregno,
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

  this.employerService.SetOtherDetails(OtherDetails).subscribe((data)=>{
     if(data){
      this.toastr.success("Successfully Created.","Success");
      this.commonService.getEnterprisealllist().subscribe((data: any) => {
        this.employersList=data
        this.Isupdate=true;
      });
      $(document).ready(function() {
        $("#lifirsttab").click();
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
GetEmpdata(empId:Number){

  this.employersList.forEach((item, index) => {
    if(empId == item.empId){
      console.log(item)
      this.EmployerID = item.employerId;
      this.empId = item.empId;
      this.employerForm.setValue({
        ddlentraid:item.empId,
        txtemprid:item.employerId,
        txtemrname:item.employerName,
        ddlprtcpy:item.parentCompany,
        txtprtregno:item.permanentRegistration,
        Date_inception:new Date(item.dateOfInception),
        date_Ecpiry:new Date(item.dateOfExpiry),
      });
      this.employerUploadBanner.setValue({
        txtempid:item.employerId,
      });
      this.employerFinancialSettings.setValue({

        ddlpfcurcy:item.primaryFunctionalCurrency,
        FYSDate:new Date(item.financialYearStartDate),
        FYEDate:new Date(item.financialYearEndDate),
        ddlpyprd:item.payPeriodType,
        txtemrtaxno:item.employerTaxNo,
        txtemrpanno:item.employerPanNo,
        txtemrdinno:item.employerDinNo,
        txtemrbnno:item.employerBinNo

        // FCur:item.primaryFunctionalCurrency,
        // FYSDate: new Date(item.financialYearStartDate),
        // FYEDate: new Date(item.financialYearEndDate),
        // PeriodType:item.payPeriodType,
        // emptn:item.employerTaxNo,
        // emppcn:item.employerPanNo,
        // empdn:item.employerDinNo,
        // empbn:item.employerBinNo
      });
      this.OtherDetails.setValue({
        employerId:item.employerId,
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
        f_name:item.arFirstName,
        m_name:item.arMiddleName,
        l_name:item.arLastName,
        Email_a:item.arEmail,
        A_Desig:item.arDesignation,
        A_Phone:item.arPhone,
        A_Fax:item.arFax,
        A_m_No:item.arMobileNo,
        A_m_Email:true,
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
      });
    }

  });
}
  employerServiceAPICall(){
    this.employerService.getEmployersList().subscribe((data: any) => {
      this.employersList=data
    console.log(data);
  });

    this.commonService.getEnterprisealllist().subscribe((data:any)=>{
      this.enterpriseList = data;
      console.log(data);

    })
    this.commonService. getEnterpriseids().subscribe((data: any) => {
      this.erpriseids=data
     
    });
    this.commonService.getCountry().subscribe((data: any) => {
      this.countryList=data
     
    });
    this.commonService.getJobCatlogPriDetailes().subscribe((data: any) => {
      this.jobCatlogPriDetailes=data
      
    });
    this.employerService.getEmployeeriD().subscribe((data: any) => {
      this.employeeriDList=data
      
    });

  }
}
