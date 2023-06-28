import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from './service/service.module';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TableChartComponent } from './table-chart/table-chart.component';
import { LineChart1Component } from 'src/app/google-chart/line-chart1/line-chart1.component';
import { ChartsModule } from 'ng2-charts';
import { LineChart2Component } from 'src/app/google-chart/line-chart2/line-chart2.component';
import { PieChart1Component } from './pie-chart1/pie-chart1.component';
import { LineChart5Component } from './line-chart5/line-chart5.component';
import { LineChart6Component } from './line-chart6/line-chart6.component';
import { PieChart3Component } from './pie-chart3/pie-chart3.component';
import { LineChart3Component } from './line-chart3/line-chart3.component';
import { PieChart4Component } from './pie-chart4/pie-chart4.component';
import { LineChart4Component } from './line-chart4/line-chart4.component';
import { PurcChartComponent } from './purc-chart/purc-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';




@NgModule({
  declarations: [PieChartComponent, LineChartComponent,PurcChartComponent, TableChartComponent, LineChart1Component, LineChart2Component,PieChart1Component, LineChart5Component, LineChart6Component, PieChart3Component, LineChart3Component, PieChart4Component, LineChart4Component, DonutChartComponent],
  imports: [
    CommonModule,
    ServiceModule,
    ChartsModule
  ],
  exports: [LineChartComponent,PieChartComponent,PurcChartComponent,LineChart1Component,LineChart2Component,PieChart1Component, LineChart5Component, LineChart6Component, PieChart3Component, LineChart3Component, PieChart4Component, LineChart4Component,DonutChartComponent],
})
export class GoogleChartModule { }
