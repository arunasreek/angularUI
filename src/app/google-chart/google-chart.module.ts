import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from './service/service.module';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TableChartComponent } from './table-chart/table-chart.component';



@NgModule({
  declarations: [PieChartComponent, LineChartComponent, TableChartComponent],
  imports: [
    CommonModule,
    ServiceModule
  ],
  exports: [LineChartComponent,PieChartComponent],
})
export class GoogleChartModule { }
