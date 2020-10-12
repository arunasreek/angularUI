import { getCurrencySymbol } from '@angular/common';
import { Component, ElementRef, OnInit , ViewChild, ViewEncapsulation } from '@angular/core';



@Component({
  
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css'],
  
  
})
export class GanttChartComponent implements OnInit {
  public data: Object[]; 
  public taskfield: Object;
  public eventMarkers: any;
  
  constructor() { }

  ngOnInit(): void { 
    this.data = [{
    TaskID: 1,
    TaskName: 'Product Concept',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    
    subtasks: [
        { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 100 },
        { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/07/2019'), Duration: 3 },
        { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/08/2019'),
        Duration: 3, Predecessor: '2', Progress: 30
        },
    ]
    }, 
    { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/10/2019'), Duration: 6, Predecessor: '1',color:'' },]; 
this.taskfield = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    child: 'subtasks'
};

this.eventMarkers = [{
  day: '04/06/2019',
  label: 'WIP'
}];
[{
  day: '04/04/2019',
  label: 'Completed'
}];
  }

}
