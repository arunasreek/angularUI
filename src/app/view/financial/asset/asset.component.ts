import { Component, OnInit } from '@angular/core';
import {CommonService} from 'src/app/services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AssestsService } from 'src/app/services';
import { IChartPost } from 'src/app/models/financial.model';

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

  constructor(public commonService:CommonService,
    private formBuilder: FormBuilder,
    public toastr:ToastrService,
    public assestsService:AssestsService) { }

  ngOnInit(): void {
    this.apiCall();
  }
  apiCall(){
    this.assestsService.GetAssetlist().subscribe(data => {
      this.assetList=data;
      });
    this.assestsService.getEmployeeriD().subscribe((data: any) => {
      this.employeerID=data;
    });
  
    this.assestsService.GetprojctList().subscribe((data: any) => {
      this.projectList=data
    });
  
    this.assestsService.Getsuplist().subscribe((data: any) => {
      this.supList=data
    });
  
  
  }
}
