import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finfis-month-closing',
  templateUrl: './finfis-month-closing.component.html',
  styleUrls: ['./finfis-month-closing.component.css']
})
export class FinfisMonthClosingComponent implements OnInit {
  start_date:Date;
  end_date:Date;
  constructor() { }

  ngOnInit(): void {
  }

}
