import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {PoliciesService } from 'src/app/services';
import { IStockItemPost } from 'src/app/models/item.model';

@Component({
  selector: 'app-stockitem',
  templateUrl: './stockitem.component.html',
  styleUrls: ['./stockitem.component.css']
})
export class StockitemComponent implements OnInit {
  stockitemList: any;
  ItemMasterForm: FormGroup;
  itemgroupList: any;
  itemcategoryList: any;
  uomList: any;
  Tax_Rate_Effective_Date: Date;

  constructor(public policiesService:PoliciesService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.itemmasterAPICall();
    this.ItemMasterFormSetup();
  }
  ItemMasterFormSetup(){
    this.ItemMasterForm = this.formBuilder.group({
      ItemCode:[''],
      ItemName:[''],
      ItemCategory:[''],
      ItemGroup:[''],
      UnitOfMeasure:[''],
      Rate:[''],
      SI_Status:[''],
      Tax_Rate:[''],
      Tax_Rate_Effective_Date:[''],
      Open_Balance:[''],
      Reorder_Quantity:[''],
      Current_Balance:[''],
    });
  }

  get f() { return this.ItemMasterForm.controls; }


  onSubmitPrimary(){
    let itemGroupPostData:IStockItemPost={
      stockitem_id:this.ItemMasterForm.value.stockitem_id,
      ItemCode: this.ItemMasterForm.value.ItemCode,
      ItemName: this.ItemMasterForm.value.ItemName,
      itemgroup_id:this.ItemMasterForm.value.ItemCategory,
      itemcat_id:this.ItemMasterForm.value.ItemGroupId,
      UnitOfMeasure: this.ItemMasterForm.value.UnitOfMeasure,
      Rate: this.ItemMasterForm.value.Rate,
      SIStatus: this.ItemMasterForm.value.SI_Status,
      GSTRate: this.ItemMasterForm.value.Tax_Rate,
      GST_Rate_Effective_Date: this.Tax_Rate_Effective_Date,
      OpeningBalance:this.ItemMasterForm.value.Open_Balance,
      ReorderLevelQuantity:this.ItemMasterForm.value.Reorder_Quantity,
      Closing_Balance: this.ItemMasterForm.value.Current_Balance,
     
    }

    this.policiesService.SetStockItem(itemGroupPostData).subscribe((data:any)=>{
        if(data.ResponseMsg){
         
            this.toastr.success("Stock Item Successfully Created.","Success");
            this.policiesService.GetStockItems().subscribe((data: any) => {
              this.stockitemList=data
            });
      //       this.staticTabs.tabs[0].active = true;
      
      //  this.submitted=false;
        }
    });
  }
  itemmasterAPICall(){
    this.policiesService.GetStockItems().subscribe((data: any) => {
      this.stockitemList=data
      
    });
    this.policiesService.GetItemGroupList().subscribe((data: any) => {
      this.itemgroupList=data
    });
    this.policiesService.GetItemCategoryList().subscribe((data: any) => {
      this.itemcategoryList=data
    });
    this.policiesService.GetunitOfMeasure().subscribe((data: any) => {
      this.uomList=data
    });
  }

}
