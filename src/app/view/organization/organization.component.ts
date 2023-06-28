import { Component, OnInit, ViewChild } from '@angular/core';
import{ OrganizationService } from '../../services/organization.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import { IOrganiationPost } from 'src/app/models';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
declare var $:any;


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  modalRef: BsModalRef;
  private gridApi;
  private gridColumnApi;
public rowData:[any];

  branchList:any;
  countryList:any;
  employeeriDList:any;
  enterprisealllist:any;
  erpriseids:any;
  jobCatlogPriDetailes:any;
  organizationIDList:any;
  organizationList:any;
  Isorganizationupdate:boolean;
  Designation:string;
  o_id:number;
 p:number=1;

  orgDepartmentForm:FormGroup;
  submitted: boolean;

  constructor(public organizationService:OrganizationService,
              private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.organizationAPICall();
    this.orgDepartmentFormSetup();
  }

  orgDepartmentFormSetup(){
    this.orgDepartmentForm = this.formBuilder.group({
     O_Department_Id:[''],
     O_Designation:[''],
     O_Department_Name:[''],
     O_Eployeer_Id:[''],
     O_Branch_Id:[''],
     O_Reporting_Department_Id:[''],
     O_Costcenter:[''],
     O_First_Name:[''],
     O_Middle_Name:[''],
     O_Last_Name:[''],  
     O_Email_Address:[''],
     O_Phone:[''],
     O_Fax:[''],
     O_Mobile_No:[''],
    });
  }

  get f() { return this.orgDepartmentForm.controls; }


  onSubmitOrgDepartment(){
    let orgPostData:IOrganiationPost={
      o_id: this.Isorganizationupdate?this.o_id:0,
      Org_ID: this.orgDepartmentForm.value.O_Department_Id,
      OrganizationName: this.orgDepartmentForm.value.O_Department_Name,
      emp_id: this.orgDepartmentForm.value.O_Eployeer_Id,
      b_id: this.orgDepartmentForm.value.O_Branch_Id,
      ReportingDepartmentID: this.orgDepartmentForm.value.O_Reporting_Department_Id,
      CostCenter: this.orgDepartmentForm.value.O_Costcenter,
      MD_FirstName: this.orgDepartmentForm.value.O_First_Name,
      MD_MiddleName: this.orgDepartmentForm.value.O_Middle_Name,
      MD_LastName: this.orgDepartmentForm.value.O_Last_Name,
      MD_Designation: this.Designation,//this.orgDepartmentForm.value.,
      MD_Email: this.orgDepartmentForm.value.O_Email_Address,
      MD_Phone: this.orgDepartmentForm.value.O_Phone,
      MD_Fax: this.orgDepartmentForm.value.O_Fax,
      MD_MobileNo: this.orgDepartmentForm.value.O_Mobile_No,
      MD_PreferredContactPerson: '' //this.orgDepartmentForm.value.,
    }

    this.organizationService.setOrganization(orgPostData).subscribe((data:any)=>{
        if(data.ResponseMsg){
            this.toastr.success("Organization Successfully Created.","Success");
            this.organizationService.getOrganizationList(0).subscribe((data: any) => {
              this.organizationList=data
            });
      //       this.staticTabs.tabs[0].active = true;
      
      //  this.submitted=false;
        }
    });
  }

  orgEdit(o_id:number){
    this.organizationService.getOrganizationList(o_id).subscribe((data: any) => {
       this.o_id= data[0].o_id,
       this.orgDepartmentForm.setValue({
          O_Department_Id:data[0].Org_ID,
          O_Department_Name:data[0].OrganizationName,
          O_Eployeer_Id:data[0].emp_id,
          O_Designation:data[0].MD_Designation,
          O_Branch_Id:data[0].BranchId,
          O_Reporting_Department_Id:data[0].ReportingDepartmentID,
          O_Costcenter:data[0].CostCenter,
          O_First_Name:data[0].MD_FirstName,
          O_Middle_Name:data[0].MD_MiddleName,
          O_Last_Name:data[0].MD_LastName,
          O_Email_Address:data[0].MD_Email,
          O_Phone:data[0].MD_Phone,
          O_Fax:data[0].MD_Fax,
          O_Mobile_No:data[0].MD_MobileNo,
          // MD_PreferredContactPerson: ''
       });
    });

    $(document).ready(function() {
      $("#tabsecond").click();
    });
  }

  cancelorg(){
    this.o_id=0;
    this.orgDepartmentForm.reset();
  }

  deleteOrg(o_id:number){
    this.organizationService.deleteOrganization(o_id).subscribe((data: any) => {
        if(data.ResponseMsg){
          this.toastr.success("Organization Successfully Deleted.","Success");
          this.organizationService.getOrganizationList(0).subscribe((data: any) => {
            this.organizationList=data
          });
        }
    });
  }

  Getjodcatdet(jobId:number,jobTitle:string){
    console.log(jobTitle);
    this.Designation=jobTitle;
    this.orgDepartmentForm.patchValue({
      O_Designation:jobTitle
    });
    $(document).ready(function() {
      $('#Designation').modal('hide');
    });
    
  }

  columnDefs = [
    {headerName: 'Organization ID',field:'Org_ID'},
    {headerName: 'Organization Name', field: 'OrganizationName'},
    {headerName: 'Manager Name', field: 'MD_FirstName' },
    {headerName: 'Designation', field: 'MD_Designation' },
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
 
  this.organizationService.getOrganizationList(0).subscribe(data => {
    params.api.setRowData(data);
    });
  

}

  organizationAPICall(){
    this.organizationService.getbranchlist(0).subscribe((data: any) => {
      this.branchList=data
    });

    this.organizationService.getCountry().subscribe((data: any) => {
      this.countryList=data
    });

    this.organizationService.getEmployeeriD().subscribe((data: any) => {
      this.employeeriDList=data
    });

    this.organizationService.getenterprisealllist().subscribe((data: any) => {
      this.enterprisealllist=data
    });

    this.organizationService.getEnterpriseids().subscribe((data: any) => {
      this.erpriseids=data
    });

    this.organizationService.getJobCatlogPriDetailes().subscribe((data: any) => {
      this.jobCatlogPriDetailes=data
    });

    this.organizationService.getOrganizationID().subscribe((data: any) => {
      this.organizationIDList=data
    });

    this.organizationService.getOrganizationList(0).subscribe((data: any) => {
      this.organizationList=data
    });
  }

}
