
     
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {WarehouseService } from 'src/app/services';
import { IFloorPost } from 'src/app/models/warehouse.model';
declare var $:any;



@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
  floorList: any;
  FloorForm: FormGroup;
  Isupdate:boolean;
  Isrenew:boolean;
  IsActive:boolean;
  IsInactive:boolean;
  Isedit:number;
  IsJBupdate:boolean;
  http: any;
  p: number=1;
  floorId:number;
  constructor(public warehouseService:WarehouseService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.FloorAPICall();
    this.FloorFormSetup();
  }
  FloorFormSetup(){
    this.FloorForm = this.formBuilder.group({
      FloorId:[''],
      Floordesc:[''],
     
    });
  }

  get f() { return this.FloorForm.controls; }


  onSubmitPrimary(){
    let floorPostData:IFloorPost={
      floor_id:0,
      FloorID: this.FloorForm.value.FloorId,
      FloorDescription: this.FloorForm.value.Floordesc,
     
    }

    this.warehouseService.SetFloordet(floorPostData).subscribe((data:any)=>{
        if(data.ResponseMsg){
         
            this.toastr.success("Floor Successfully Created.","Success");
            this.warehouseService.GetFloorList().subscribe((data: any) => {
              this.floorList=data
            });
      //       this.staticTabs.tabs[0].active = true;
      
      //  this.submitted=false;
        }
    });
  }

//   columnDefs = [
//     {headerName: 'Floor ID', field: 'make' },
//     {headerName: 'Floor Description', field: 'model' },
//     { headerName: "Actions",
//     suppressMenu: true,
//     suppressSorting: true,
//     template:
//       `<button type="button" data-action-type="view"  class="fa fa-eye" style="border:none;background:none;color:#102f66;margin-left:-10px">
         
//       </button>
      
//       <button type="button" data-action-type="view"  class="fa fa-edit" style="border:none;background:none;color:#102f66">
         
//        </button>

//       <button type="button" data-action-type="remove" class="fa fa-trash" style="border:none;background:none;color:#102f66">
        
//       </button>`
//   }
    
// ];

// rowData = [
//     { make: 'Toyota', model: 'Celica' },
//     { make: 'Ford', model: 'Mondeo'},
//     { make: 'Porsche', model: 'Boxter' }
// ];
 FloorAPICall(){
  this.warehouseService.GetFloorList().subscribe((data: any) => {
    this.floorList=data
    console.log(data);
  });
}

GetFloorById(ID:number){
  this.floorList.forEach((value,index)=>{
    if(value.floorId == ID){
      this.floorId = value.floorId;
      this.FloorForm.setValue({
        FloorId:value.floorId,
        Floordesc: value.floorDescription,
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
