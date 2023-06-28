import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-line-chart3',
  templateUrl: './line-chart3.component.html',
  styleUrls: ['./line-chart3.component.css']
})
export class LineChart3Component implements OnInit {

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
      ['Cost', 'TOtal Budget','Budget Amount Used'],
      ['0',  1,5],
      ['10',  2,12],
      ['20',  3,29],
      ['30',  4,35],
      ['40',  5,57]
   ]);
   let chart = new this.gLib.visualization.ColumnChart(document.getElementById('container'));
    let options = {'title':'Project Budget'};

    chart.draw(data,options);
  }

}
