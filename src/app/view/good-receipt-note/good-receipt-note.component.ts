import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-receipt-note',
  templateUrl: './good-receipt-note.component.html',
  styleUrls: ['./good-receipt-note.component.css']
})
export class GoodReceiptNoteComponent implements OnInit {
  
  sup_do_date:Date;
  
  constructor() { }

  ngOnInit(): void {
  }

}
