import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-line-chart5',
  templateUrl: './line-chart5.component.html',
  styleUrls: ['./line-chart5.component.css']
})
export class LineChart5Component implements OnInit {
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
     
   ['Year', 'ER-253', 'LA-173'],
    ['Jan2020', 1000,      850],
   ['2020', 970,      500],
     ['2020',  560,       390],
     ['Dec2020',  930,      650]
 ]);
   let chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));
    let options = {'title':''};

    chart.draw(data,options);
  }


}
