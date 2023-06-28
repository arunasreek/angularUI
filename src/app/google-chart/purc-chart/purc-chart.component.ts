import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-purc-chart',
  templateUrl: './purc-chart.component.html',
  styleUrls: ['./purc-chart.component.css']
})
export class PurcChartComponent implements OnInit {

  private gLib: any;

  constructor(private gChartService : GoogleChartService) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }


  ngOnInit(): void {
  }
  private drawChart(){
    let chart = new this.gLib.visualization.PieChart(document.getElementById('divPieChart'));
    let data = new this.gLib.visualization.DataTable();
    data.addColumn('string', 'Accessories');
    data.addColumn('number', 'Quantity');
    data.addRows([
      ['Cash', 10],
      ['Account Receivable', 12],
      ['Inventory', 7],
      ['Current Liabilities', 24],
      ['Account Payable', 32]
    ]);

    let options = {'title':'Income Expenses&Cash Flow'};

    chart.draw(data, options);
  }

}
