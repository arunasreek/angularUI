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

    this.procurementService.GetMaterialItemdetbyid().subscribe((data: any) => {
      this.materialItem=data
    });

    this.procurementService.GetOrganizationList().subscribe((data: any) => {
      this.organizationlist=data
    });

    this.procurementService.GetprojctList().subscribe((data: any) => {
      this.projectList=data
    });

    
  }
}
