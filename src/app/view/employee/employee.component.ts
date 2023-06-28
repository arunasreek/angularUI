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
  //   this.employeeService.getEmployeedetList().subscribe(data => {
         
  //     console.log(data);
  // });
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
      ED_Designation: [''],
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
    console.log(this.employeePrimaryForm.value)
    // stop here if form is invalid
    if (this.employeePrimaryForm.invalid) {
        return;
    }
   

    let employeeData: IEmployeePost = {
      employee_id: this.employeePrimaryForm.value.employee_id?this.employeePrimaryForm.value.employee_id:0,
      EmployeeID: this.employeePrimaryForm.value.Ed_Employee_ID,
      emp_id: this.employeePrimaryForm.value.Ed_Employer_ID,
      b_id: this.employeePrimaryForm.value.Ed_Emplr_branch,
      o_id: 3,
      project_id: this.employeePrimaryForm.value.Ed_prj,
      ED_FirstName: this.employeePrimaryForm.value.Ed_f_name,
      ED_MiddleName: this.employeePrimaryForm.value.Ed_m_name,
      ED_LastName: this.employeePrimaryForm.value.Ed_l_name,
      ED_Email: this.employeePrimaryForm.value.Ed_Email,
      ED_Designation: this.Designation,
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
      ED_PreferredContactMode: null,
      ECP_FirstName: this.employeePrimaryForm.value.ECP_f_name,
      ECP_MiddleName: this.employeePrimaryForm.value.ECP_m_name,
      ECP_LastName: this.employeePrimaryForm.value.ECP_L_name,
      ECP_Email: this.employeePrimaryForm.value.ECP_Email,
      ECP_Relation: this.employeePrimaryForm.value.ECP_relation,
      ECP_Phone: this.employeePrimaryForm.value.ECP_Phone,
      ECP_Fax: this.employeePrimaryForm.value.ECP_Fax,
      ECP_MobileNo: this.employeePrimaryForm.value.ECP_mobile,
      ECP_CountryOfResidency: this.employeePrimaryForm.value.ECP_cnt_resd,
      ECP_PreferredContactMode: null,
      ContractStartDate: this.Ed_cnrt_stdate,
      ContractEndDate: this.Ed_cnrt_enddate,
      WorkStartDate: null
    }

    this.employeeService.setEmployeepdet(employeeData).subscribe((data: any) => {
      if(data.ResponseMsg){
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

    this.employeeService.editEmployeepdet(empEdit).subscribe((data: any) => {
      if(data.ResponseStatus){
     
        this.Ed_dob = new Date(data.GetEmployeeDetailsList[0].DateOfBirth);
        this.Ed_Rtr_Date=new Date(data.GetEmployeeDetailsList[0].RetirementDate);
        this.Ed_Drv_lic_isudt=new Date(data.GetEmployeeDetailsList[0].DrivingLicenseIssueDate);
        this.Ed_Drv_lic_exp=new Date(data.GetEmployeeDetailsList[0].DrivingLicenseExpiryDate);
        this.Ed_cnrt_stdate=new Date(data.GetEmployeeDetailsList[0].ContractStartDate);
        this.Ed_cnrt_enddate=new Date(data.GetEmployeeDetailsList[0].ContractEndDate);
        //Setting Values
          this.employeePrimaryForm.setValue({
      employee_id:data.GetEmployeeDetailsList[0].employee_id,
      Ed_Employee_ID:data.GetEmployeeDetailsList[0].EmployeeID,
      Ed_Employer_ID:data.GetEmployeeDetailsList[0].emp_id,
      Ed_Emplr_branch:data.GetEmployeeDetailsList[0].b_id,
       Ed_Emplr_org:null,
       Ed_A_Desig:null,
      // "o_id":  $("#hiddenorganisation").val(),
      Ed_prj:data.GetEmployeeDetailsList[0].project_id,
      Ed_f_name:data.GetEmployeeDetailsList[0].ED_FirstName,
      Ed_m_name:data.GetEmployeeDetailsList[0].ED_MiddleName,
      Ed_l_name:data.GetEmployeeDetailsList[0].ED_LastName,
      Ed_Email:data.GetEmployeeDetailsList[0].ED_Email,
      // "ED_Designation":  $("#hiddendesignation").val(),
      Ed_mobile:data.GetEmployeeDetailsList[0].MobileNo,
      Ed_Phone:data.GetEmployeeDetailsList[0].PhoneNo,
      Ed_ext:data.GetEmployeeDetailsList[0].Ext,
      Ed_bldgrp:data.GetEmployeeDetailsList[0].BloodGroup,
      Ed_Drv_lic_No:data.GetEmployeeDetailsList[0].DrivingLicenseNumber,
      Ed_Drv_lic_isudt:data.GetEmployeeDetailsList[0].DrivingLicenseIssueDate,
      Ed_Drv_lic_exp:data.GetEmployeeDetailsList[0].DrivingLicenseExpiryDate,
      Ed_dob:data.GetEmployeeDetailsList[0].DateOfBirth,
      Ed_Rtr_Date:data.GetEmployeeDetailsList[0].RetirementDate,
      Ed_Dependents:data.GetEmployeeDetailsList[0].NoOfDependents,
       Edvalues:null,
      ECP_f_name:data.GetEmployeeDetailsList[0].ECP_FirstName,
      ECP_m_name:data.GetEmployeeDetailsList[0].ECP_MiddleName,
      ECP_L_name:data.GetEmployeeDetailsList[0].ECP_LastName,
      ECP_Email:data.GetEmployeeDetailsList[0].ECP_Email,
      ECP_relation:data.GetEmployeeDetailsList[0].ECP_Relation,
      ECP_Phone:data.GetEmployeeDetailsList[0].ECP_Phone,
      ECP_Fax:data.GetEmployeeDetailsList[0].ECP_Fax,
      ECP_cnt_resd:data.GetEmployeeDetailsList[0].ECP_CountryOfResidency,
      ECPvalues:data.GetEmployeeDetailsList[0].ECP_PreferredContactMode,
      Ed_cnrt_stdate:data.GetEmployeeDetailsList[0].ContractStartDate,
      Ed_cnrt_enddate:data.GetEmployeeDetailsList[0].ContractEndDate,
      ECP_mobile:data.GetEmployeeDetailsList[0].ECP_MobileNo
          });

          this.I_Date= new Date(data.GetEmployeeDetailsList[0].IssueDate);
          this.expdate= new Date(data.GetEmployeeDetailsList[0].ExpiryDate);
          this.VI_Date= new Date(data.GetEmployeeDetailsList[0].Visa_IssueDate);
          this.VI_expdate= new Date( data.GetEmployeeDetailsList[0].Visa_ExpiryDate);
          this.WI_Date = new Date(data.GetEmployeeDetailsList[0].Work_IssueDate);
          this.W_expdate = new Date(data.GetEmployeeDetailsList[0].Work_ExpiryDate);
          this.Ed_wrkstdate =new Date( data.GetEmployeeDetailsList[0].WorkStartDate);

          this.employeeWorkForm.setValue({
            pp_num:  data.GetEmployeeDetailsList[0].PassportNo,
            PI_Auth:   data.GetEmployeeDetailsList[0].IssuingAuthority,
            PI_cntry:   data.GetEmployeeDetailsList[0].IssuingCountry,
            V_num:   data.GetEmployeeDetailsList[0].VisaNo,
            VI_Auth:   data.GetEmployeeDetailsList[0].Visa_IssuingAuthority,
            VI_cntry:   data.GetEmployeeDetailsList[0].Visa_IssuingCountry,
            Wrk_per_no:   data.GetEmployeeDetailsList[0].WorkPermitNo,
            WI_Auth:   data.GetEmployeeDetailsList[0].Work_IssuingAuthority,
            WI_cntry:   data.GetEmployeeDetailsList[0].Work_IssuingCountry,
            
          });
       }


    });
    $(document).ready(function() {
      $("#tabsecond").click();
    });
  }

  onSubmitWorkPermit(){
    let empWorkPermitData:IEmployeeWorkPermit={
      employee_id: this.employeePrimaryForm.value.employee_id,
      PassportNo: this.employeeWorkForm.value.pp_num,
      IssueDate: this.I_Date,
      ExpiryDate: this.VI_expdate,
      IssuingAuthority:  this.employeeWorkForm.value.PI_Auth,
      IssuingCountry:  this.employeeWorkForm.value.PI_cntry,
      VisaNo:  this.employeeWorkForm.value.V_num,
      Visa_IssueDate: this.VI_Date,
      Visa_ExpiryDate: this.VI_expdate,
      Visa_IssuingAuthority:  this.employeeWorkForm.value.VI_Auth,
      Visa_IssuingCountry:  this.employeeWorkForm.value.VI_cntry,
      WorkPermitNo:  this.employeeWorkForm.value.Wrk_per_no,
      Work_IssueDate:this.WI_Date,
      Work_ExpiryDate: this.W_expdate,
      Work_IssuingAuthority:  this.employeeWorkForm.value.WI_Auth,
      Work_IssuingCountry:  this.employeeWorkForm.value.WI_cntry,
      WorkStartDate: this.Ed_wrkstdate
    }

    this.employeeService.UpadteEmpWrkprmtdet(empWorkPermitData).subscribe((data: any) => {
        if(data.ResponseStatus){
            this.toastr.success('Updated Successfully.','Success')
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
    });

    this.employeeService.getOrganizationList(0).subscribe((data: any) => {

    });

    this.employeeService.getbranchlist(0).subscribe((data: any) => {
      this.empbranchlist = data;
    });

    this.employeeService.getJobCatlogPriDetailes().subscribe((data: any) => {
      this.jobCatlogPriDetailes=data;
    });
  }

}
