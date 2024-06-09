import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmployeePost, IEmployeeDelete, IEmployeeEdit, IEmployeeWorkPermit } from 'src/app/models';
import { ToastrService } from 'ngx-toastr';
declare var $:any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  public rowData:{any};


  Isupdate:boolean;
  Isrenew:boolean;
  IsActive:boolean;
  IsInactive:boolean;
  employeedetList: any;
  employersList: any;
  empbranchlist: any;
  Ed_Drv_lic_exp: Date;
  Ed_Drv_lic_isudt: Date;
  Ed_Rtr_Date: Date;
  Ed_cnrt_stdate: Date;
  Ed_cnrt_enddate: Date;
  Ed_dob: Date;
  p: number=1;
  employeePrimaryForm: FormGroup;
  employeeWorkForm: FormGroup;
  submitted=false;

  I_Date: Date;
  expdate: Date;
  VI_Date: Date;
  VI_expdate: Date;
  WI_Date:Date;
  W_expdate: Date
  Ed_wrkstdate: Date
  http: any;
  Designation: string;
  jobCatlogPriDetailes: any;


  constructor(public employeeService: EmployeeService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.employeeAPIcall();
    this.emplyeeFormSetup();
    this.employeeWorkFormSetup();
  }

  emplyeeFormSetup() {
    this.employeePrimaryForm = this.formBuilder.group({
      employee_id: [''],
      Ed_Employee_ID: ['',[Validators.required,Validators.maxLength(6)]],
      Ed_Employer_ID: [''],
      Ed_Emplr_branch: [''],
      Ed_Emplr_org: [''],
      Ed_A_Desig: [''],
      // "o_id":  $("#hiddenorganisation").val(),
      Ed_prj: [''],
      Ed_f_name: [''],
      Ed_m_name: [''],
      Ed_l_name: [''],
      Ed_Email: [''],
      // ED_Designation: [''],
      Ed_mobile: [''],
      Ed_Phone: [''],
      Ed_ext: [''],
      Ed_bldgrp: [''],
      Ed_Drv_lic_No: [''],
      Ed_Drv_lic_isudt: [''],
      Ed_Drv_lic_exp: [''],
      Ed_dob: [''],
      Ed_Rtr_Date: [''],
      Ed_Dependents: [''],
      Edvalues: [''],
      ECP_f_name: [''],
      ECP_m_name: [''],
      ECP_L_name: [''],
      ECP_Email: [''],
      ECP_relation: [''],
      ECP_Phone: [''],
      ECP_Fax: [''],
      ECP_cnt_resd: [''],
      ECPvalues: [''],
      Ed_cnrt_stdate: [''],
      Ed_cnrt_enddate: [''],
      ECP_mobile: ['']
    });
  }

  employeeWorkFormSetup (){
    this.employeeWorkForm = this.formBuilder.group({
      EmployeesId:[''],
      pp_num:[''],
      PI_Auth:[''],
      PI_cntry:[''],
      V_num:[''],
      VI_Auth:[''],
      VI_cntry:[''],
      Wrk_per_no:[''],
      WI_Auth:[''],
      WI_cntry:[''],
        
    });
  }

  get f() { return this.employeePrimaryForm.controls; }
  get d() { return this.employeeWorkForm.controls; }


  clearEmployeedata(){
    this.employeePrimaryForm.reset();
  }

  Getjodcatdet(jobId:number,jobTitle:string){
    console.log(jobTitle);
    this.Designation=jobTitle;
    this.employeePrimaryForm.patchValue({
      Ed_A_Desig:jobTitle
    });
    $(document).ready(function() {
      $('#Designation').modal('hide');
    });
    
  }

  onSubmitPrimary() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.employeePrimaryForm.invalid) {
        return;
    }
   

    let employeeData: IEmployeePost = {
      EmployeeId: this.employeePrimaryForm.value.employee_id?this.employeePrimaryForm.value.employee_id:0,
      EmployeeId1: this.employeePrimaryForm.value.Ed_Employee_ID,
      EmpId: this.employeePrimaryForm.value.Ed_Employer_ID,
      BId: this.employeePrimaryForm.value.Ed_Emplr_branch,
      OId: 3,
      ProjectId: this.employeePrimaryForm.value.Ed_prj,
      EdFirstName: this.employeePrimaryForm.value.Ed_f_name,
      EdMiddleName: this.employeePrimaryForm.value.Ed_m_name,
      EdLastName: this.employeePrimaryForm.value.Ed_l_name,
      EdEmail: this.employeePrimaryForm.value.Ed_Email,
      EdDesignation: this.Designation,
      MobileNo: this.employeePrimaryForm.value.Ed_mobile,
      PhoneNo: this.employeePrimaryForm.value.Ed_Phone,
      Ext: this.employeePrimaryForm.value.Ed_ext,
      BloodGroup: this.employeePrimaryForm.value.Ed_bldgrp,
      DrivingLicenseNumber: this.employeePrimaryForm.value.Ed_Drv_lic_No,
      DrivingLicenseIssueDate: this.Ed_Drv_lic_isudt,
      DrivingLicenseExpiryDate: this.Ed_Drv_lic_exp,
      DateOfBirth: this.Ed_dob,
      RetirementDate: this.Ed_Rtr_Date,
      NoOfDependents: this.employeePrimaryForm.value.Ed_Dependents,
      EdPreferredContactMode: null,
      EcpFirstName: this.employeePrimaryForm.value.ECP_f_name,
      EcpMiddleName: this.employeePrimaryForm.value.ECP_m_name,
      EcpLastName: this.employeePrimaryForm.value.ECP_L_name,
      EcpEmail: this.employeePrimaryForm.value.ECP_Email,
      EcpRelation: this.employeePrimaryForm.value.ECP_relation,
      EcpPhone: this.employeePrimaryForm.value.ECP_Phone,
      EcpFax: this.employeePrimaryForm.value.ECP_Fax,
      EcpMobileNo: this.employeePrimaryForm.value.ECP_mobile,
      EcpCountryOfResidency: this.employeePrimaryForm.value.ECP_cnt_resd,
      EcpPreferredContactMode: null,
      ContractStartDate: this.Ed_cnrt_stdate,
      ContractEndDate: this.Ed_cnrt_enddate,
      WorkStartDate: null
    }
    console.log(employeeData);
    this.employeeService.setEmployeepdet(employeeData).subscribe((data: any) => {
      if(data){
        this.toastr.success("Employer Branch Successfully Created.","Success");

      this.employeeService.getEmployeedetList().subscribe((data: any) => {
        this.employeedetList = data;
        this.Isupdate=true;
      });
      $(document).ready(function() {
        $("#tabfirst").click();
      });
    }

    });


  }


  deleteEmployee(empId: string) {
    let empDelete: IEmployeeDelete = {
      employee_id: empId
    }
    this.employeeService.deleteEmployeepdet(empDelete).subscribe((data: any) => {
      if(data.ResponseStatus){
        this.toastr.success('Deleted Successfully.','Success');
        this.employeeService.getEmployeedetList().subscribe((data: any) => {
          this.employeedetList = data;
        });
      }
      
    });
  }

  editemployee(empId:string){
    let empEdit: IEmployeeEdit = {
        employee_id: empId
    }
    this.Isupdate=true;
    this.employeedetList.forEach((item, index) => {
      if(item.employeeId==empId){
     
        this.Ed_dob = new Date(item.dateOfBirth);
        this.Ed_Rtr_Date=new Date(item.retirementDate);
        this.Ed_Drv_lic_isudt=new Date(item.drivingLicenseIssueDate);
        this.Ed_Drv_lic_exp=new Date(item.drivingLicenseExpiryDate);
        this.Ed_cnrt_stdate=new Date(item.contractStartDate);
        this.Ed_cnrt_enddate=new Date(item.contractEndDate);
          this.employeePrimaryForm.setValue({
          employee_id:item.employeeId,
          Ed_Employee_ID:item.employeeId1,
          Ed_Employer_ID:item.empId,
          Ed_Emplr_branch:item.bId,
          Ed_Emplr_org:null,
          Ed_A_Desig:null,
          Ed_prj:item.projectId,
          Ed_f_name:item.edFirstName,
          Ed_m_name:item.edMiddleName,
          Ed_l_name:item.edLastName,
          Ed_Email:item.edEmail,
          Ed_mobile:item.mobileNo,
          Ed_Phone:item.phoneNo,
          Ed_ext:item.ext,
          Ed_bldgrp:item.bloodGroup,
          Ed_Drv_lic_No:item.drivingLicenseNumber,
          Ed_Drv_lic_isudt:item.drivingLicenseIssueDate,
          Ed_Drv_lic_exp:item.drivingLicenseExpiryDate,
          Ed_dob:item.dateOfBirth,
          Ed_Rtr_Date:item.retirementDate,
          Ed_Dependents:item.noOfDependents,
          Edvalues:null,
          ECP_f_name:item.ecpFirstName,
          ECP_m_name:item.ecpMiddleName,
          ECP_L_name:item.ecpLastName,
          ECP_Email:item.ecpEmail,
          ECP_relation:item.ecpRelation,
          ECP_Phone:item.ecpPhone,
          ECP_Fax:item.ecpFax,
          ECP_cnt_resd:item.ecpCountryOfResidency,
          ECPvalues:item.ecpPreferredContactMode,
          Ed_cnrt_stdate:new Date(item.contractStartDate),
          Ed_cnrt_enddate:new Date(item.contractEndDate),
          ECP_mobile:item.ecpMobileNo
          });

          this.I_Date= new Date(item.issueDate);
          this.expdate= new Date(item.expiryDate);
          this.VI_Date= new Date(item.visaIssueDate);
          this.VI_expdate= new Date( item.visaExpiryDate);
          this.WI_Date = new Date(item.workIssueDate);
          this.W_expdate = new Date(item.workExpiryDate);
          this.Ed_wrkstdate =new Date( item.workStartDate);

          this.employeeWorkForm.setValue({
            EmployeesId:item.employeeId,
            pp_num:  item.passportNo,
            PI_Auth:   item.issuingAuthority,
            PI_cntry:   item.issuingCountry,
            V_num:   item.visaNo,
            VI_Auth:   item.visaIssuingAuthority?item.visaIssuingAuthority:'',
            VI_cntry:   item.visaIssuingCountry?item.visaIssuingCountry:'',
            Wrk_per_no:   item.workPermitNo,
            WI_Auth:   item.workIssuingAuthority?item.workIssuingAuthority:'',
            WI_cntry:   item.workIssuingCountry?item.workIssuingCountry:'',
            
          });
       }

    });
    $(document).ready(function() {
      $("#tabsecond").click();
    });

    
  }

  onSubmitWorkPermit(){
    alert( this.employeeWorkForm.value.EmployeesId);
    let empWorkPermitData:IEmployeeWorkPermit={
      EmployeeId: this.employeeWorkForm.value.EmployeesId,
      EmployeeId1:this.employeePrimaryForm.value.Ed_Employee_ID,
      PassportNo: this.employeeWorkForm.value.pp_num,
      IssueDate: this.I_Date,
      ExpiryDate: this.VI_expdate,
      IssuingAuthority:  this.employeeWorkForm.value.PI_Auth,
      IssuingCountry:  this.employeeWorkForm.value.PI_cntry,
      VisaNo:  this.employeeWorkForm.value.V_num,
      VisaIssueDate: this.VI_Date,
      VisaExpiryDate: this.VI_expdate,
      VisaIssuingAuthority:  this.employeeWorkForm.value.VI_Auth,
      VisaIssuingCountry:  this.employeeWorkForm.value.VI_cntry,
      WorkPermitNo:  this.employeeWorkForm.value.Wrk_per_no,
      WorkIssueDate:this.WI_Date,
      WorkExpiryDate: this.W_expdate,
      WorkIssuingAuthority:  this.employeeWorkForm.value.WI_Auth,
      WorkIssuingCountry:  this.employeeWorkForm.value.WI_cntry,
      WorkStartDate: this.Ed_wrkstdate
    }

    this.employeeService.UpadteEmpWrkprmtdet(empWorkPermitData).subscribe((data: any) => {
        if(data){
            this.toastr.success('Updated Successfully.','Success');

      this.employeeService.getEmployeedetList().subscribe((data: any) => {
        this.employeedetList = data;
        this.Isupdate=true;
      });
      $(document).ready(function() {
        $("#tabfirst").click();
      });
        }
    });
  }
  columnDefs = [
    {headerName: 'Employee ID', field: 'employee_id' },
    {headerName: 'Employer ID', field: 'EmployeeID' },
    {headerName: 'First Name', field: 'ED_FirstName' },
    {headerName: 'Middle Name', field: 'ED_MiddleName' },
    {headerName: 'Description', field: 'ED_Designation' },
    { headerName: "Actions",
    suppressMenu: true,
    suppressSorting: true,
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
       this.employeeService.getEmployeedetList().subscribe(data => {
         
        params.api.setRowData(data.GetEmployeeDetailsList);
    });
}
  employeeAPIcall() {
    this.employeeService.getEmployersList().subscribe((data: any) => {
      this.employersList = data;

    });

    this.employeeService.getEmployeedetList().subscribe((data: any) => {
      this.employeedetList = data;
      console.log(data);
    });

    this.employeeService.getOrganizationList().subscribe((data: any) => {

    });

    this.employeeService.getbranchlist(0).subscribe((data: any) => {
      this.empbranchlist = data;

      console.log(data);
    });

    this.employeeService.getJobCatlogPriDetailes().subscribe((data: any) => {
      this.jobCatlogPriDetailes=data;
    });
  }

}
