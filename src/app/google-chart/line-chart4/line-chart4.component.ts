import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-line-chart4',
  templateUrl: './line-chart4.component.html',
  styleUrls: ['./line-chart4.component.css']
})
export class LineChart4Component implements OnInit {

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
      ['Month','Revenue','Target','Growth'],
      ['Jan2020',  100,56,92],
      ['Feb2020',  200,170,185],
      ['Mar2020',  300,292,240],
      ['April2020',  400,350,381],
    
   ]);
   let chart = new this.gLib.visualization.ColumnChart(document.getElementById('container'));
    let options = {'title':'Revenue'};

    chart.draw(data,options);
  }

}
