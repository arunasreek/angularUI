import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {WarehouseService } from 'src/app/services';
import { IRackPost } from 'src/app/models/warehouse.model';
declare var $:any;

@Component({
  selector: 'app-rack',
  templateUrl: './rack.component.html',
  styleUrls: ['./rack.component.css']
})
export class RackComponent implements OnInit {
  rackList: any;
  RackForm: FormGroup;
  Isupdate:boolean;
  Isrenew:boolean;
  IsActive:boolean;
  IsInactive:boolean;
  Isedit:number;
  IsJBupdate:boolean;
  http: any;
  p: number=1;
  rackId:number;
  constructor(public warehouseService:WarehouseService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.RackFormSetup();
    this.RackAPICall();
  }
  RackFormSetup(){
    this.RackForm = this.formBuilder.group({
      RackId:[''],
      Rackdesc:[''],
     
    });
  }

  get f() { return this.RackForm.controls; }


  onSubmitPrimary(){
    let rackPostData:IRackPost={
      rack_id:0,
      RackID: this.RackForm.value.RackId,
      RackDescription: this.RackForm.value.Rackdesc,
     
    }

    this.warehouseService.SetRackdet(rackPostData).subscribe((data:any)=>{
        if(data.ResponseMsg){
          
            this.toastr.success("Rack Successfully Created.","Success");
            this.warehouseService.GetRackList().subscribe((data: any) => {
              this.rackList=data
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
 RackAPICall(){
  this.warehouseService.GetRackList().subscribe((data: any) => {
    this.rackList=data
    console.log(data);
  });
}

GetRackById(ID:number){
  this.rackList.forEach((value,index)=>{
    if(value.rackId == ID){
      this.rackId = value.rackId;
      this.RackForm.setValue({
        RackId:value.rackId1,
        Rackdesc: value.rackDescription,
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
