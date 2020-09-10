import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {WarehouseService } from 'src/app/services';
import { IRowPost } from 'src/app/models/warehouse.model';
declare var $:any;

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  rowList: any;
  RowForm: FormGroup;

  constructor(public warehouseService:WarehouseService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
     this.RowFormSetup();
     this.RowAPICall();
  }
  RowFormSetup(){
    this.RowForm = this.formBuilder.group({
      RowId:[''],
      Rowdesc:[''],
     
    });
  }

  get f() { return this.RowForm.controls; }


  onSubmitPrimary(){
    let rowPostData:IRowPost={
      row_id:0,
      RowID: this.RowForm.value.RowId,
      RowDescription: this.RowForm.value.Rowdesc,
     
    }

    this.warehouseService.SetRowdet(rowPostData).subscribe((data:any)=>{
        if(data.ResponseMsg){
          
            this.toastr.success("Row Successfully Created.","Success");
            this.warehouseService.GetRowList().subscribe((data: any) => {
              this.rowList=data
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
 RowAPICall(){
  this.warehouseService.GetRowList().subscribe((data: any) => {
    this.rowList=data
  });
}

}
