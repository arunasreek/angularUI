import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-line-chart6',
  templateUrl: './line-chart6.component.html',
  styleUrls: ['./line-chart6.component.css']
})
export class LineChart6Component implements OnInit {

  private gLib: any;


  constructor(private gChartService : GoogleChartService) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit(): void {
  }
  private drawChart(){
    let data = this.gLib.visualization.arrayToDataTable([
      ['Day', 'Q2', 'Q3','Q4'],
     
      [1,  37.8, 80.8, 41.8],
      [2,  30.9, 69.5, 32.4],
      [3,  25.4,   57, 25.7],
      [4,  11.7, 18.8, 10.5],
      [5,  11.9, 17.6, 10.4],
      [6,   8.8, 13.6,  7.7],
      [7,   7.6, 12.3,  9.6],
      [8,  12.3, 29.2, 10.6],
      [9,  16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11,  5.3,  7.9,  4.7],
      [12,  6.6,  8.4,  5.2],
      [13,  4.8,  6.3,  3.6],
      [14,  4.2,  6.2,  3.4]
 ]);
   let chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));
    let options = {'title':'Working Capital Ratio'};

    chart.draw(data,options);
  }


}
