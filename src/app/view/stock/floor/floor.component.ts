
     
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {WarehouseService } from 'src/app/services';
import { IsupplierPost } from 'src/app/models/supplier.model';
declare var $:any;



@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnDefs = [
    {headerName: 'Floor ID', field: 'make' },
    {headerName: 'Floor Description', field: 'model' },
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

rowData = [
    { make: 'Toyota', model: 'Celica' },
    { make: 'Ford', model: 'Mondeo'},
    { make: 'Porsche', model: 'Boxter' }
];

}
