import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finfis-year-closing',
  templateUrl: './finfis-year-closing.component.html',
  styleUrls: ['./finfis-year-closing.component.css']
})
export class FinfisYearClosingComponent implements OnInit {
  start_date:Date;
  end_date:Date;
  constructor() { }

  ngOnInit(): void {
  }

}
