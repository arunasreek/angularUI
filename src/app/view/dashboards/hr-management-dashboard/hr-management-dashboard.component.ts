import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { FullCalendarComponent } from '@fullcalendar/angular';  
import { EventInput } from '@fullcalendar/core';  
import dayGridPlugin from '@fullcalendar/daygrid';  

@Component({
  selector: 'app-hr-management-dashboard',
  templateUrl: './hr-management-dashboard.component.html',
  styleUrls: ['./hr-management-dashboard.component.css']
})
export class HrManagementDashboardComponent implements OnInit {


  public minDate: Date = new Date ("05/07/2017");
  public maxDate: Date = new Date ("08/27/2060");
  public value: Date = new Date ("10/16/2020");


  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }


}
