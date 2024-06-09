import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ProcurementService } from 'src/app/services';
import { IsupplierPost } from 'src/app/models/supplier.model';
declare var $:any;

@Component({
  selector: 'app-material-requisition',
  templateUrl: './material-requisition.component.html',
  styleUrls: ['./material-requisition.component.css']
})
export class MaterialRequisitionComponent implements OnInit {
  employerId: any;
  stockItems: any;
  materialItem: any;
  organizationlist: any;
  projectList: any;
  branchList: any;
  mat_proj_strt_date:Date;
  mat_dt_delvry:Date;
  employeeList: any;


  constructor(public procurementService:ProcurementService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.materialAPICall();
  }
  materialAPICall(){
    this.procurementService.GetEmployeeriD().subscribe((data: any) => {
      this.employerId=data
    });

    this.procurementService.GetStockItems().subscribe((data: any) => {
      this.stockItems=data
    });
    this.procurementService.GetEmployeedetList().subscribe((data: any) => {
      this.employeeList=data
    });

    this.procurementService.GetMaterialItemdetbyid().subscribe((data: any) => {
      this.materialItem=data
    });
    this.procurementService.getbranchlist().subscribe((data: any) => {
      this.branchList=data
    });
    this.procurementService.GetOrganizationList().subscribe((data: any) => {
      this.organizationlist=data
    });

    this.procurementService.GetprojctList().subscribe((data: any) => {
      this.projectList=data
    });

    
  }
}
