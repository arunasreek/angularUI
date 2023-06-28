import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';
@Component({
  selector: 'app-pie-chart1',
  templateUrl: './pie-chart1.component.html',
  styleUrls: ['./pie-chart1.component.css']
})
export class PieChart1Component implements OnInit {

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
      ['Budgetary Control', 13],
      ['Cost Benefit Analysis', 16],
      ['Value Analysis', 4],
      ['Contribution Analysis', 15],
      ['Standard Costing', 12]
    ]);

    let options = {'title':'Cost Reduction'};

    chart.draw(data, options);
  }

}
