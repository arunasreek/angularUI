import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-financial-year',
  templateUrl: './financial-year.component.html',
  styleUrls: ['./financial-year.component.css']
})
export class FinancialYearComponent implements OnInit {
  start_date:Date;
  end_date:Date;
  guid: any;
  Tabsactive: any;
 
  constructor() { }

  ngOnInit(): void {
  }
  addFiscalPeriod()
  {
    this.guid=this.Tabsactive.tab_2;
    // changeCont('3','tab2');
    $(document).ready(function() {
      $("#tabthird").click(this.guid);
    
    });
  }
}
