import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-stock-adjustment-note',
  templateUrl: './stock-adjustment-note.component.html',
  styleUrls: ['./stock-adjustment-note.component.css']
})

export class StockAdjustmentNoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columnDefs = [
    {headerName: 'S.No', field: 'make' , width:100 },
    {headerName: 'Item Id', field: 'model', width:100 },
    {headerName: 'Description', field: 'model', width:200 },
    {headerName: 'Qty', field: 'model' , width:100},
    {headerName: 'UM', field: 'model', width:100 },
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

rowData = [
    { make: 'Toyota', model: 'Celica' },
    { make: 'Ford', model: 'Mondeo'},
    { make: 'Porsche', model: 'Boxter' }
];
onRowClicked(event: any) {$("#mat_Item_id").modal("show");}
}
