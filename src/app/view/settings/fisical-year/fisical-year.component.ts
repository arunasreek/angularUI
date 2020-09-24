import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-fisical-year',
  templateUrl: './fisical-year.component.html',
  styleUrls: ['./fisical-year.component.css']
})
export class FisicalYearComponent implements OnInit {
start_date:Date;
end_date:Date;
form1:any;
guid:any;
  tab_2: any;
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
