     
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {WarehouseService } from 'src/app/services';
import { IWareHouse } from 'src/app/models/warehouse.model';

declare var $:any;
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WareHouse implements OnInit {

  Isupdate:boolean;
  Isrenew:boolean;
  IsActive:boolean;
  IsInactive:boolean;
  Isedit:number;
  IsJBupdate:boolean;
  http: any;
  p: number=1;
  wareHouseList:any;
  wareHouse_id:number;
  warehouseForm:FormGroup;
  constructor( private wareHouse : WarehouseService,
    private fromBuilder:FormBuilder,public toaster:ToastrService) { }

  ngOnInit(): void {
    this.UOMAPIcall();
    this.UOMFormSetUp();
  }
  UOMFormSetUp(){
    this.warehouseForm = this.fromBuilder.group({
      WareHouseID: [''],
      WareHouseDesc: [''],
      Status:['']
    });
  }
  
    UOMAPIcall() {
      this.wareHouse.GetWareHouseList().subscribe((data: any) => {
        this.wareHouseList = data;
        console.log(data);
      });
    }
    onSubmitUOM(){
      let ware:IWareHouse={
          WarehouseId: this.wareHouse_id > 0 ? this.wareHouse_id : 0,
          WarehouseDescription: this.warehouseForm.value.WareHouseDesc,
          Status: this.warehouseForm.value.Status,
          WarehouseId1: this.warehouseForm.value.WareHouseID,
      }
      console.log(ware);
      this.wareHouse.SetWareHouse(ware).subscribe((data)=>{
        if(data){
         this.toaster.success("Successfully Created.","Success");
         this.UOMAPIcall();
         $(document).ready(function() {
           $("#afirsttab").click();
         });
        }
       
     },
     (error) => {
       console.log('POST request failed', error);
     }
     );
    }
    GetUOMById(ID:number){
        this.wareHouseList.forEach((value,index)=>{
          if(value.warehouseId == ID){
            this.wareHouse_id = value.warehouseId;
            this.warehouseForm.setValue({
                WareHouseID:value.warehouseId1,
                WareHouseDesc: value.warehouseDescription,
                Status: value.status,
            })
            this.IsJBupdate=true;
            this.Isedit=1;
          } 
          $(document).ready(function() {
            $("#tab_1").click();
          });
        });
    }
  }
  
  