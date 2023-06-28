import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-pie-chart4',
  templateUrl: './pie-chart4.component.html',
  styleUrls: ['./pie-chart4.component.css']
})
export class PieChart4Component implements OnInit {

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
      ['General', 25],
      ['Marketing', 28],
      ['Sales', 44],
     
    ]);

    let options = {'title':'Operational Expenses'};

    chart.draw(data, options);
  }

}
